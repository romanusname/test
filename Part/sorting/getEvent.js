"use client";
import {v4 as uuidv4} from "uuid";
import part from '@part'
//import {useRef,useState} from 'react'

export default function getEvent({props,ref,key,value}) {

    let event = {name:key,vars:value,ref,section:props.section}
    if(!Array.isArray(event.vars)) event.vars = [event.vars]

    for (let i = 0;i<event.vars.length;i++){
        event.vars[i] = part.styleAbbreviations(event.vars[i],'event')
    }

    if(event.vars[0].id){
        event.id = event.vars[0].id
        delete event.vars[0].id
    }
    else {
      //  event.id = uuidv4()
        event.id = false
    }


/*    if(event.vars[0].responsive){
        event.responsive = event.vars[0].responsive
        delete event.vars[0].responsive
    }*/


    if(event.vars[0].allow){
        event.allow = event.vars[0].allow
        if(typeof event.allow != 'array') event.allow = [event.allow]
        delete event.vars[0].allow
    }

    if(event.vars[0].disable){
        event.disable = event.vars[0].disable
        if(typeof event.disable != 'array') event.disable = [event.disable]
        delete event.vars[0].disable
    }


/*    if(event.vars[0].mobile){
        event.mobile = event.vars[0].mobile
        delete event.vars[0].mobile
    }*/

    if(event.vars[0].start){
        event.start = event.vars[0].start
        delete event.vars[0].start
    }else {
        event.start = {start: "top bottom"}
    }

    if(event.start=='start') event.start = {start: "top bottom"}
    if(event.start=='middle') event.start = {start: "top top"}


    if(event.vars[0].end){
        event.end = event.vars[0].end
        delete event.vars[0].end
    }else {
        event.end = {end: "bottom top"}
    }

    if(typeof event.end == 'number') event.end = {end: `bottom+=${event.end} top`}


    return event
}