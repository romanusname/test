import gsap from "gsap";
import  {useEffect} from 'react'
export default function onRepeat({eventsTemplate, ref, name}){


    useEffect(()=>{
        console.log('onRepeat')
        setTimeout( ()=>
                gsap.to(ref.current,{
                    ...eventsTemplate.onRepeat,ease: "none", repeat: -1,
                    scrollTrigger :{
                        trigger: ref.current,
                        toggleActions: "play pause play pause",
                    }
                })
            ,200)
    },[])
}