"use client";
import part from '@part'
import React,{useEffect,useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import Slot from './Slot'
export default function list(props) {
    const [slots,setSlots] = useState([])
    const {socket} = part.socket()
   // console.log(props.ssr)

    useEffect(()=>{
        /*let users = props.ssr.Users
        for (let i = 0;i<users.length;i++){
            let key = uuidv4()
            setSlots((e)=>[...e,<Slot email={users[i].email} role={users[i].role} key={key}/>])
        }*/
        if(socket) {
            socket.emit('/control/users', (users) => {
                for (let i = 0; i < users.length; i++) {
                    let key = uuidv4()
                    setSlots((e) => [...e, <Slot email={users[i].email} role={users[i].role} key={key}/>])
                }
            })
        }

    },[socket])

    return(
        <part.group disableMemo={true} height={300} area={'middle'} {...props}>
            {slots}
        </part.group>
    )
}