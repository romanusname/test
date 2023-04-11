"use client";
import part from '@part'
import React,{useState,useEffect,useRef,useContext} from 'react'
//<part.group setModal={['clock',true]} setParams={['clock',{time:date.getTime()}]}>{date.getHours()}:{date.getMinutes()}</part.group>
export default function Clock(props) {
 //   const date = props.formState.date
    const {formState, dispatch} = part.formContext()
   // const [hours,setHours] = useState(0)
  //  const [minutes,setMinutes] = useState(0)
  //  let date = {hours,setHours,minutes,setMinutes}
    //setModal={['clock',true]}
    return(
        <>
            <part.group setModal={['clock',true]}>{formState.date.getHours()}:{formState.date.getMinutes()}</part.group>
        </>
    )
}