import {Server} from "socket.io";
import total from "@total";

export default async function server(req, res) {

    if (res.socket.server.io) {
        console.log('Socket is already running')
    } else {
        console.log('Socket is initializing')
        const io = new Server(res.socket.server)
        res.socket.server.io = io

        total.socket.middleware(io)
        total.socket.connection(io)

    }
    res.end()

}