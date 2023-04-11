"use client";
import React,{useEffect,useRef} from "react";
import gsap from 'gsap'
import part from "@part"
export default function Card(props) {

    const textRef = useRef()
    const ref = useRef()
    function click() {
        gsap.to(ref.current,{
            background:'red'
        })
        gsap.to(textRef.current,{
            color:'blue'
        })
        console.log(props)
    }


    function hover(e){
        console.log(e.type)
        gsap.to(textRef.current,{
            color:'blue'
        })
    }
// присваевается children и заменяет h
    //пропускать gsap через styleTemplates . Сокращения и цвета
    return(
        <part.group size={[200,300]} props={props} pass={{pointerEvents:'none'}}>
                <part.h2>123</part.h2>
                <part.h2>123</part.h2>
        </part.group>
    )
}