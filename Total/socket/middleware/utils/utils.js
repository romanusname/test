import bcrypt from 'bcrypt'
import { v4 as uuidv4 } from 'uuid';
import access from '@config/access'
export default function utils(io) {

    const roles = access()


    io.use((socket, next) => {

        socket.utils = {}

        socket.access = (on)=>{
            if(roles[socket.user.role].paths.includes(on)){return true}
            else{
                socket.alert('0.1')
                return false
            }
        }


        socket.utils.bcrypt = bcrypt
        socket.utils.uuid = uuidv4


        next();
    });
}