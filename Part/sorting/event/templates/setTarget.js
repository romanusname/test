"use client";
import  {useEffect} from 'react'
import part from '@part'
export default function setTarget(event) {
    const [target,setTarget] = part.modals.target(event.vars[0])
   // console.log('SET TARGET')
    useEffect(()=>{
        if(!event.ref.current) return;
        if(typeof event.vars[1] == 'number') event.ref.current.addEventListener('click', () => setTarget(event.vars[1]))

        if(typeof event.vars[1] == 'string') {
            if(event.vars[1].indexOf('-')!=-1){
                event.ref.current.addEventListener('click', () => setTarget((e)=>e-event.vars[1].slice(1)))
            }
            if(event.vars[1].indexOf('+')!=-1){
                event.ref.current.addEventListener('click', () => setTarget((e)=>e+Number(event.vars[1].slice(1))))
            }
        }
    },[])
}