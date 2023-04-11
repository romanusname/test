"use client"
import part from '@part'
import React,{useEffect,useState,useRef} from 'react'

export default function Timer1(){
    const [state,setState] = useState(0)
    return(
        <part.wrapper>
        <flex onClick={()=>setState(state+1)}>{state}</flex>
        </part.wrapper>
    )
}