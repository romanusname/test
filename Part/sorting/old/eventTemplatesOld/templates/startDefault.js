import gsap from "gsap";
import  {useEffect} from 'react'
import animates from "@config/animate.config";
export default function hover({eventsTemplate, ref, name}){
    useEffect(()=>{

        gsap.from(ref.current,{
            ...animates[name],
            delay:0.2,
            scrollTrigger : ref.current,
            duration:1
        })

    },[])
}