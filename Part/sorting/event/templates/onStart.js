"use client";
//import gsap from "gsap";
//import {ScrollTrigger} from "gsap/ScrollTrigger";
import  {useEffect} from 'react'
import part from "@part";
//import animates from "@config/animate.config";
import gsap from "gsap";
export default function onStart(event){

    useEffect(()=>{
        gsap.from(event.ref.current,{
            ...event.vars[0],
           // transform: `skew(0,-5deg)`,
            delay:0.2,
            duration:0.5,
            scrollTrigger :{
                trigger: event.ref.current,
                start:"top+=150 bottom",
              //  markers:true,
                //   toggleActions: "play reset play reset"
            }
        })
    },[])

}