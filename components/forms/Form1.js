"use client";
import part from "@part";
import {useEffect,useContext} from "react";
import {useAnimation} from '@hooks'

export default function Form1(props){

    const [target,setTarget] = part.modals.target('auth')


    const formAnime = ()=>{
        if(target==0) return {
            transition:[{},{x:500,opacity:0,dur:1}],
            reverseTransition:{x:-500,opacity:0,dur:1}
        }

       if(target==1) return {
            transition:[{},{x:-500,opacity:0,dur:1}],
            reverseTransition:{x:500,opacity:0,dur:1}
        }
    }



    return(
        <part.form {...formAnime()} target={'auth'} direction={'column'} justify={'start'} {...props}>
            {props.children}
        </part.form>
    )
}