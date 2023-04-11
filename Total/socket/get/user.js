//import total from '@total'
import db from '@db'
export default function user(socket) {

    socket.on('/get/users',async (res)=>{
        if(socket.access('/control')) {
            const users = await db.user.find()
            delete users.token
            delete users.password
            res(users)
        }
    })

}