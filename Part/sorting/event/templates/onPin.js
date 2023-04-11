"use client";
import gsap from "gsap";
import  {useEffect,useState} from 'react'
import part from "@part";
import scrollResponsive from "../scrollResponsive";
export default function onPin(event) {
  //  const {responsive, setResponsive} = part.responsive.context()
  //  event.responsive = responsive

    event.trigger = event.ref
    event.scrollVars = {pin:true,scrub:true,pinSpacing: false}
    event.start = 'top top'
//    part.globalScroll.create(event)

    useEffect(()=>{
        scrollResponsive(event)
    },[])

}
