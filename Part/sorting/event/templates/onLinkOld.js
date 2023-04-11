"use client";
import { useRouter } from 'next/navigation';
import  {useEffect} from 'react'
import part from "@part";
export default function onLink(event) {
  //  console.log('onLink')
    const {role,setRole} = part.role()
    const router = useRouter()

    const [show,setShow] = part.modals.control('auth')

    let le = {}
    if(typeof event.vars[0]=='string'){
        le.path = event.vars[0]
    }

    if(typeof event.vars[0]=='object'){
        le.path = event.vars[0].path
        le.min = event.vars[0].min
        le.else = event.vars[0].else
    }



    useEffect(()=>{
       // event.ref.current.addEventListener('click', () => click())
        event.ref.current.onclick = click

        function click(){
            console.log(role)
            if(!le.min || role == 'user') {
                router.push(le.path)
            }
            else{
                if(le.else=='sign'){setShow(true)}
            }
        }
    },[role])


}