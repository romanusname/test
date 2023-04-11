import cookie from "cookie";
//import total from "@total";
import db from "@db"

export default function user(io) {
    io.use(async(socket, next) => {
        let cookies = cookie.parse(socket.handshake.headers.cookie);
        const user = await db.user.findOne({token:cookies.token})
        socket.user = user
        next();
    });

    io.use(async(socket, next) => {
        socket.join(socket.user.role);
        next();
    });

    io.use((socket, next) => {
        socket.setUser = (user)=>{
            socket.user = user
            socket.emit('setRole',socket.user.role)
        }
        next();
    });


    io.use((socket, next) => {
        socket.login = async (data)=>{
            if(!data.email) return socket.alert('1.1')

            const user = await db.user.findOne({email:data.email})
            if(!user) return socket.alert('1.1')

            if(!await socket.utils.bcrypt.compare(data.password, user.password)) return socket.alert('1.2')

            user.logintoken = await socket.utils.uuid()
            user.save()

            socket.closeModal('auth')
            socket.redirect('/profile')

            socket.setUser(user)
            socket.emit('getLogin', {logintoken:user.logintoken})
        }
        next();
    });

    io.use((socket, next) => {

        socket.register = async (data)=>{
            console.log(data)
            if(!data.password || data.password!=data.confirmPassword){
                return socket.alert.error('некорректный пароль');
            }
            const salt = await socket.utils.bcrypt.genSalt(3)
            const hashedPassword = await socket.utils.bcrypt.hash(data.password, salt)

            const mailUsed = await db.user.findOne({email:data.email})
            if(mailUsed) return socket.alert.error('почта уже используется');

            const user = await db.user.findOne({token:socket.user.token})

            user.role = 'user'
            user.email = data.email
            user.password = hashedPassword
            await user.save()
            socket.setUser(user)
            socket.alert.success('успешная регистрация')

            const users = await db.user.find({})
          //  console.log(users)
           // socket.broadcast.emit('track/users',users)
            io.to('admin').emit('track/users',users)
        }

        next();
    });
}