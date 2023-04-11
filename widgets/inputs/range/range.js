"use client";
import part from '@part'
import React,{useState,useEffect,useRef} from 'react'
import gsap from "gsap";
import {Draggable} from "gsap/Draggable";
export default function range() {
    const ref = useRef()
    const refGroup = useRef()


    const {formState, dispatch} = part.formContext()



    useEffect(()=>{

        Draggable.create(ref.current, {
            type: "x",
            bounds: refGroup.current,
            inertia: true,
            onDrag() {
                let progress = gsap.utils.normalize(this.minX, this.maxX, this.x);
                let hours = Math.trunc(progress*24)
                let minutes = Math.trunc(progress*24*60)
                dispatch({type:'setHours',payload:hours})
                dispatch({type:'setMinutes',payload:minutes-hours*60})
              //  date.setHours(hours)
              //  date.setMinutes(minutes-hours*60)
            },
        });

    },[])

    return(
        <part.grid ref={refGroup} w={'100%'} h={50} bg={'blue'}>

            <part.grid center ref={ref} w={70} h={25} bg={'red'}>
                {formState.date.getHours()}:{formState.date.getMinutes()}
            </part.grid>

            <part.group w={'100%'} h={3} bg={'green'}>
            </part.group>

        </part.grid>
    )
}