"use client";
import part from "@part";
import {useEffect,useContext,useRef,useState} from "react";
import gsap from 'gsap'

export default function Input1(props){
    const placeRef = useRef()

    function focus() {
        gsap.to(placeRef.current, {y: '-100%'})
    }

    function blur() {
        gsap.to(placeRef.current, {y: '0%'})
    }



    return(
        <part.label margin={5} widthMax={['80%',300]}>
            <part.input onFocus={{bg:'gray',onStart:focus,onReverse:blur}} size={'100%'} {...props}/>
            <part.input.placeholder id={props.id} ref={placeRef}>123</part.input.placeholder>
        </part.label>
    )
}

/*
<part.label>
    <part.input type={'email'} placeholder={'Почта'} props={props}/>
    <part.input.placeholder>123</part.input.placeholder>
</part.label>*/
