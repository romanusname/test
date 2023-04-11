"use client";
import React, {createContext, useContext, useEffect, useState} from "react"
//import {TlContext} from "@modules/Part/services/timelineContext";
import part from '@part'
export const TlContext = createContext({})
import gsap from "gsap";
import { v4 as uuidv4 } from 'uuid';
import getVars from "./getVars";
export default function globalTimeline({ref,eventsTemplate,eventName,ev}){

}


globalTimeline.create = (event)=>{


    if(!event.id) {
        useEffect(()=>{
        event.globalTimeline = event.timeline

        for (let i=0; i<event.vars.length; i++){
            let vars = getVars(event,i)
            event.globalTimeline[event.direction](event.ref.current,vars,0)  //to / from /[event.direction]
        }

        event.add(event)
        },[])

        return;
    }

    const {tlState, setTlState}= useContext(TlContext)

    useEffect(()=>{
        setTlState( e =>
            ({...e,[event.id]:event.timeline})
        )
    },[])

    useEffect(()=>{
        if(!tlState[event.id]) return;

            event.globalTimeline = tlState[event.id]

            for (let i=0; i<event.vars.length; i++){
                let vars = getVars(event,i)
                event.globalTimeline[event.direction](event.ref.current,vars,0)  //to / from /[event.direction]
            }

            event.add(event)

    },[tlState[event.id]])

}




globalTimeline.connect =(event)=>{
    // if(typeof window === 'undefined') return

    const {tlState, setTlState}= useContext(TlContext)

    useEffect(()=>{
            if (!tlState[event.name]) return;
                for (let i=0; i<event.vars.length; i++) {
                     let vars = getVars(event,i)
                     setTlState(tlState[event.name].to(event.ref.current, vars,0))
                }
        },[tlState[event.name]])
}




globalTimeline.provider = ({children})=>{
    const [tlState,setTlState] = useState({})

    return(
        <TlContext.Provider value={{tlState, setTlState}}>
            {children}
        </TlContext.Provider>
    )
}


