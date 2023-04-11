import languadge from "./alertCods/languadge1";
export default function alert(io) {

    io.use((socket, next) => {

        socket.alert = (code)=>{
            if(languadge[code] && !languadge[code].disable) socket.emit('alert',languadge[code])
        }
        socket.alert.error = (message)=>{
            socket.emit('alert',{type:'error',message:message})
        }
        socket.alert.success = (message)=>{
            socket.emit('alert',{type:'success',message:message})
        }

        next();
    });

}