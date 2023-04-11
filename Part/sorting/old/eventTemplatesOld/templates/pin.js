import gsap from "gsap";
import  {useEffect} from 'react'
export default function hover({eventsTemplate, ref, name}){
    useEffect(()=>{

            gsap.to(ref.current,{
                scrollTrigger: {
                    trigger: ref.current,
                    scrub: true,
                    pin: true,
                    pinSpacing: false
                }
            })

    },[])
}