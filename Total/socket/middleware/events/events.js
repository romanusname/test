export default function events(io) {
    io.use((socket, next) => {

        socket.closeModal = (name)=>{
            socket.emit('closeModal',name)
        }

        socket.openModal = (name)=>{
            socket.emit('openModal',name)
        }

        socket.redirect = (path)=>{
            socket.emit('redirect',path)
        }

        next();
    });
}