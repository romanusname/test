"use client";
import  {useEffect} from 'react'
import part from "@part";
export default function setModal(event) {
    const [show,setShow]= part.modals(event.vars[0])

    useEffect(()=>{
        if(!event.ref.current) return;
            event.ref.current.addEventListener('click', () => {
                setShow(event.vars[1])
            })
    },[show])
}