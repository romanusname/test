"use client";
import part from "@part";
import React, {useEffect, useRef} from "react";
import gsap from "gsap";

export default function Test({email,role}){
    const ref = useRef()

    useEffect(()=>{
        gsap.from(ref.current,{
            opacity:0,
            duration:2
        })
    },[])

    return(
        <part.tr ref={ref} bg={'green'}>
            <part.td valueKey={'email'} color={'coral'}>{email}</part.td>
            <part.td valueKey={'role'}>{role}</part.td>
        </part.tr>
    )
}