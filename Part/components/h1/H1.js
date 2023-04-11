"use client"
import gsap from 'gsap'
import part from '@part'
import React,{useEffect,useRef} from 'react'
import fonts from '@config/fonts'

const H1 = React.forwardRef((props, ref) => {
    if(!ref) ref = useRef()
    let name = 'h1'
    props = part.propsSorting({props,ref, name})

    return(
        <h1 {...props.attributes} className={fonts.h1.className}>
            {props.children}
        </h1>
    )
})
export default H1