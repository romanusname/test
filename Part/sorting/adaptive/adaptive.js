"use client";
import gsap from "gsap";
import React,{useEffect,useRef,useContext} from 'react'
import {AdaptiveContext} from "@layouts/Context";
export default function Adaptive(mobile,ref) {
    const {adaptive,setAdaptive} = useContext(AdaptiveContext)

    let tl = useRef(gsap.timeline({paused:true}))

    useEffect(()=>{
        if(mobile) {
            tl.current.to(ref.current, {...mobile, duration: 0})
        }
    },[])

    useEffect(()=>{

        if(adaptive=='mobile' && mobile){
            tl.current.play()
        }
        if(adaptive=='computer' && mobile){
            tl.current.reverse()
        }
    },[adaptive])

}