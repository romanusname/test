/*
"use client";
import React, {useRef} from "react";
import {useContext,useEffect} from "react"
import {StyleContext} from "@modules/Part/services/UseContext";
import part from "@part";
import gsap from 'gsap'
const use = React.forwardRef((props, ref) => {
    const {UseState,setUseState}= useContext(StyleContext)
    if(!ref) ref = useRef()
    let name = 'use'
    props = part.propsParsing({props, ref, name})

    useEffect(()=>{
        if(UseState) {
            gsap.set(ref.current,UseState)
        }
    },[UseState])

    const childrenPassProps = part.childrenPassProps(props)

    return(


            <div {...props.attributes}>
                {childrenPassProps}
            </div>

    )
})

export default use
*/
