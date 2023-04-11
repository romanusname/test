import {useState} from "react";
import {SocketContext} from "./socket";

export default function provider({children}) {
    const [socket,setSocket] = useState(false)
    return(
        <SocketContext.Provider value={{ socket,setSocket }}>
            {children}
        </SocketContext.Provider>
    )
}