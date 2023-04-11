"use client";
import { useRouter } from 'next/navigation';
import  {useEffect} from 'react'
import part from "@part";
export default function link(event) {
    //  console.log('onLink')
    const {role,setRole} = part.role()
    const router = useRouter()

    const [show,setShow] = part.modals('auth')


    const template = {
        '/profile':()=>{
            if (role != 'guest') router.push(event.vars[0])
            else {setShow(true)}
        }
    }


    useEffect(()=>{
        if(role) {
            event.ref.current.onclick = getClick
            //  event.ref.current.addEventListener('click', getClick)


            function getClick(){
                if(template[event.vars[0]]){
                    return template[event.vars[0]]()
                }
                return router.push(event.vars[0])
            }
        }
    },[role])


}



/*function getClick(){
    if(event.vars[0] == '/profile'){
        if (role != 'guest') return router.push(event.vars[0])
        else {return setShow(true)}
    }

    return router.push(event.vars[0])
}*/





/*
function getClick(){
    if(typeof event.vars[0]=='string'){
        return router.push(event.vars[0])
    }
    if(typeof event.vars[0]=='object'){

        if(event.vars[0].else == 'profile') {
            if (role != 'guest') return router.push(event.vars[0].path)
            else {return setShow(true)}
        }

    }
}*/
