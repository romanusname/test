"use client";
import gsap from 'gsap'
//import initTl from '../initTl'
import part from "@part";
import {useEffect} from "react";

export default function onStopPropagation(event) {

       function stopPropagation(e){
           e.stopPropagation();
        //   console.log(e)
       }

       useEffect(()=>{
           event.ref.current.addEventListener('click', (e) => stopPropagation(e))
       },[])
}