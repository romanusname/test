"use client";
import gsap from 'gsap'
import part from '@part'
import React,{useEffect,useRef} from 'react'
import fonts from '@config/fonts'

//import { Inter } from 'next/font/google';
//import { Dancing_Script } from 'next/font/google';
//const dancingScript = Dancing_Script();

//import { Josefin_Sans } from 'next/font/google';
//const oswald = Josefin_Sans();


const H2 = React.forwardRef((props, ref) => {
    if(!ref) ref = useRef()
    let name = 'h2'
    props = part.propsSorting({props,ref, name})


/*    const inter = Inter({
        variable: '--font-inter',
    });*/

//{...props.attributes}
    return(
        <h2 {...props.attributes} className={fonts.h2.className}>
            {props.value}
        </h2>
    )
})
export default H2