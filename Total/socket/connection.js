//import total from "@total";
import getUser from './get/user'

export default function connection(io) {
    io.on('connection', socket => {

        console.log('connect',socket.user.role)


        socket.on('/permitSetUTCDeviation',(access)=>{
            access()
        })

        socket.on('/setUTCDeviation',(data)=>{
            let date = new Date()
            let UTCDeviation = Math.round((date.getTime() - data.time)/(60000*5))
            socket.UTCDeviation = UTCDeviation
                // UTC сервера минус UTC клиента
                // если UCT клиента на час отстает, то от отображаемого на клиенте времени нужно отнять час
          //  if(UTCDeviation == 0 || -0) console.log('время клиента синхронизированно')
        })


        socket.emit('setRole',socket.user.role)

        socket.on('/register',socket.register)
        socket.on('/login',socket.login)

        socket.on('/createRoom',socket.createRoom)
        socket.on('/createSlot',socket.createSlot)

        socket.on('/getSlots',socket.getSlots)

        getUser(socket)

    })
}