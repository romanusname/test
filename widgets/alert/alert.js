"use client";
import {useEffect,useRef} from "react";
import gsap from 'gsap'

import part from '@part'
export default function alert(props) {
    const ref = useRef()

    useEffect(()=>{
        gsap.from(ref.current,{
            opacity:0
        })
        setTimeout(()=>{
            gsap.to(ref.current,{
                opacity:0,
                onComplete:()=>props.remove()
            })
            }, 3500)

    },[])

    return (
        <part.flex ref={ref} width={150} height={70} bg={'red'} br={3} marginBottom={10}  zIndex={999999999999999999}>
            {props.message}
        </part.flex>
    )
}



/*
return (
    <part.flex width={300} height={150} bg={'red'}  zIndex={999999999999999999}>
        {props.message}
    </part.flex>
)*/
