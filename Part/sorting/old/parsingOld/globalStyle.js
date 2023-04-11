"use client";
import {useContext,useEffect} from "react"
import {StyleContext} from "../styleContext";
import gsap from "gsap";
const globalStyle =(style)=>{
/*    const {UseState,setUseState}= useContext(StyleContext)
    useEffect(()=>{
        setUseState(style)
    },[])*/
}

function copy(style){
    const {stylesState,setStylesState}= useContext(StyleContext)
/*    useEffect(()=>{
       // setUseState(style)
    },[])*/
    useEffect(()=>{
        let id = style.copyStyle
        delete style.copyStyle
        //({...e,})
        setStylesState(e=>
            e[id] = style
        )
    },[])
}


function paste(style,ref){
    const {stylesState,setStylesState}= useContext(StyleContext)
/*    useEffect(()=>{
        if(UseState) {
            gsap.set(ref.current,UseState)
        }
    },[UseState])*/
    let id = style.pasteStyle
    useEffect(()=>{
        if(stylesState[id]) {
            gsap.set(ref.current,stylesState[id])
        }
    },[stylesState[id]])
}

globalStyle.copy = copy
globalStyle.paste = paste

export default globalStyle