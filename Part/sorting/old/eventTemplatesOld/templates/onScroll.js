import gsap from "gsap";
import  {useEffect} from 'react'
export default function onScroll({eventsTemplate, ref, name}){

    let type = 'from'
    if(eventsTemplate.onScroll.type){
        type = eventsTemplate.onScroll.type
        delete eventsTemplate.onScroll.type
    }

    /*if(eventsTemplate.scroll.to){
        type = 'to'
        delete eventsTemplate.scroll.to
    }
    if(eventsTemplate.scroll.from) {
        type = 'from'
        delete eventsTemplate.scroll.from
    }*/


    useEffect(()=>{
        setTimeout( ()=>
                gsap[type](ref.current,{
                    ...eventsTemplate.onScroll,
                    scrollTrigger: {
                        trigger:ref.current,
                        start: "top bottom",
                        end: "bottom top",
                      //  markers:true,
                        scrub: 1,
                    }
                })
            ,200)
    },[])
}