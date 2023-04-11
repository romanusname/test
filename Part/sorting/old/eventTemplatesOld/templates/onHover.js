"use client";
import gsap from "gsap";
import part from '@part'
//import { v4 as uuidv4 } from 'uuid';
export default function onHover(event){

    event.timeline = gsap.timeline({paused:true,...event.tlSetting})
    event.addEventListener = addEventListener
    //if(!event.id) event.id = uuidv4()
    part.globalTimeline.create(event)

    function addEventListener(event){
     //   event.globalTimeline.to(event.ref.current, event.vars,0)
        event.ref.current.onmouseenter = ()=>{
            event.globalTimeline.play()
        }
        event.ref.current.onmouseleave = ()=>{
            event.globalTimeline.reverse()
            //tl['pause']()
        }
    }

}










/*"use client";
import gsap from "gsap";
import part from '@part'
export default function onHover(event){

    event.timeline = gsap.timeline({paused:true})

    function addEventListener(event){
        //  event.globalTimeline.to(event.ref.current, event.vars,0)
        console.log('AddEvent')
        event.ref.current.onmouseenter = ()=>{
            event.globalTimeline.play()
        }
        event.ref.current.onmouseleave = ()=>{
            event.globalTimeline.reverse()
        }
    }

    event.addEventListener = addEventListener

    part.globalTimeline.create(event)
}*/











/*"use client";
import gsap from "gsap";
import  {useEffect} from 'react'
/!*import {useContext} from "react"
//import {TlContext} from "@modules/Part/services/timelineContext";*!/
//import globalTimeline from "../globalTimeline";
import { v4 as uuidv4 } from 'uuid';
import part from '@part'
export default function onHover({eventsTemplate, ref, name,style}){
    let tlSetting = {paused:true}

    let eventName = 'onHover'
    if(!eventsTemplate[eventName].id) eventsTemplate[eventName].id = uuidv4()
    //   console.log(style.section)
    //  eventsTemplate[eventName].section = style.section
    part.globalTimeline.create({ref,eventsTemplate,eventName,ev,tlSetting})



    useEffect(()=>{
        // if(!eventsTemplate.onHover.id) ev(tl,eventsTemplate,ref)
    },[])

    function ev(tl,eventsTemplate,ref){

        tl.to(ref.current, eventsTemplate.onHover,0)
        ref.current.onmouseenter = ()=>{
            tl.play()
        }
        ref.current.onmouseleave = ()=>{
            tl.reverse()
        }
    }

}*/
