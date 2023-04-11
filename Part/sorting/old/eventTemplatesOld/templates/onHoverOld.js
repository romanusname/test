import gsap from "gsap";
import  {useEffect} from 'react'
/*import {useContext} from "react"
import {TlContext} from "@modules/Part/services/timelineContext";*/
import globalTimeline from "../globalTimeline";
export default function onHover({eventsTemplate, ref, name}){
    let tl = gsap.timeline({paused:true})
    globalTimeline({ref,eventsTemplate})
  //  let tlId = eventsTemplate.onHover.tlId


    //const {tlState, setTlState}= useContext(TlContext)

    useEffect(()=>{
        /*setTlState( e =>
            ({...e,[tlId]:gsap.timeline({paused:true})})
        )*/

        tl.to(ref.current, eventsTemplate.onHover)
        ref.current.onmouseenter = ()=> tl.play()
        ref.current.onmouseleave = ()=> tl.reverse()

    },[])

/*    useEffect(()=>{

        if(tlState[tlId]) {
            delete eventsTemplate.onHover.tlId
            tlState[tlId].to(ref.current, eventsTemplate.onHover,0)
            ref.current.onmouseenter = () => tlState[tlId].play()
            ref.current.onmouseleave = () => tlState[tlId].reverse()
        }

    },[tlState[tlId]])*/

}