"use client";
import gsap from 'gsap'
import part from "@part";
import React,{useEffect,useState} from 'react'
export default function If (event) {

    const [tl] = useState(gsap.timeline({paused:true}))

    useEffect(()=>{
        tl.to(event.ref.current,event.vars[1])
    },[])

    useEffect(()=>{

      console.log('click',event.vars[0])

        if(event.vars[0]){
            tl.play()
        }

        if(!event.vars[0]){
            tl.reverse()
        }

    },[event])
}