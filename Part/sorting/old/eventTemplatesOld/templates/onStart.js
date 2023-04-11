import gsap from "gsap";
import  {useEffect} from 'react'
import animates from "@config/animate.config";
export default function hover({eventsTemplate, ref, name}){
    useEffect(()=>{

            if(typeof eventsTemplate.onStart != 'object'){         //сделать старт не по строке, а по клучу в объекте
                eventsTemplate.onStart = animates[eventsTemplate.onStart]
            }

            gsap.from(ref.current,{
                ...eventsTemplate.onStart,
                delay:0.2,
                duration:1,
                scrollTrigger :{
                    trigger: ref.current,
                 //   toggleActions: "play reset play reset"
                }
            })
    },[])
}