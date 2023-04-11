import gsap from "gsap";
import  {useEffect} from 'react'
/*import {useContext} from "react"
//import {TlContext} from "@modules/Part/services/timelineContext";*/
//import globalTimeline from "../globalTimeline";
export default function onFocus({eventsTemplate, ref, name}){
    let tl = gsap.timeline({paused:true})

    let eventName = 'onFocus'
  //  globalTimeline({ref,eventsTemplate,eventName,ev})
    // в 2 инпутах срабатывает фокес из за globalTimeline


    useEffect(()=>{
        if(!eventsTemplate.onFocus.id) ev(tl,eventsTemplate,ref)
    },[])

/*    if(eventsTemplate.onFocus.callback){
        eventsTemplate.onFocus.onStart = eventsTemplate.onFocus.callback
    }*/

    function ev(tl,eventsTemplate,ref){
        tl.to(ref.current, eventsTemplate.onFocus,0)
        ref.current.onfocus = ()=> tl.play()
        ref.current.onblur = ()=> tl.reverse()
    }

/*    function ev(tl,eventsTemplate,ref){
        tl.to(ref.current, eventsTemplate.onFocus,0)
        ref.current.onfocus = ()=> tl.play()
        ref.current.onblur = ()=> tl.reverse()
    }*/

}
