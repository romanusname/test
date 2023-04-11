"use client"
import gsap from 'gsap'
import part from '@part'
import React,{useEffect,useRef} from 'react'
//import { Roboto_Slab } from '@next/font/google';
//const dancingScript = Roboto_Slab();

const P = React.forwardRef((props, ref) => {
    if(!ref) ref = useRef()
    let name = 'p'
    props = part.propsSorting({props,ref, name})


    return(
        <p {...props.attributes}>
            {props.children}
        </p>
    )
})
export default P