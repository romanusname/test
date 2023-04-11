"use client";
import React, {createContext, useContext, useEffect, useState} from "react"
import getVars from "../globalTimeline/getVars";
import gsap from "gsap";
import part from "@part";
import scrollResponsive from "../event/scrollResponsive";
import responsiveConfig from "@config/responsive.config";
export const GlobalScrollContext = createContext({})
export default function globalScroll({ref,eventsTemplate,eventName,ev}){

}


globalScroll.create = (event)=>{

    if(!event.id) return;

    const {globalScrolls,setGlobalScrolls}= useContext(GlobalScrollContext)

    useEffect(()=>{
        setGlobalScrolls( e =>
            ({...e,[event.id]:event})
        )
    },[])

}


globalScroll.connect =(event)=>{
    const {globalScrolls,setGlobalScrolls}= useContext(GlobalScrollContext)
  //  const {responsive,setResponsive} = part.responsive.context()

    useEffect(()=>{
       // if (globalScrolls[event.name] && responsive!='mobile') {
        if (!globalScrolls[event.name]) return;

        event.trigger = globalScrolls[event.name].ref
        event.start = globalScrolls[event.name].start
        event.end = globalScrolls[event.name].end
        event.scrollVars = globalScrolls[event.name].scrollVars
        scrollResponsive(event)
/*        if(!event.allow && !event.disable) {
            gsap.to(event.ref.current, {
                ...event.vars[0],
                scrollTrigger: {
                    trigger: globalScrolls[event.name].ref.current,
                    ...globalScrolls[event.name].scrollVars,
                    ...globalScrolls[event.name].start,
                    ...globalScrolls[event.name].end,
                    markers: true,
                }
            })
        }


        if(event.allow){
            let mm = gsap.matchMedia();
            for (const key in responsiveConfig) {
                if (event.allow.includes(key)) {
                    mm.add(responsiveConfig[key], () => {
                        gsap.to(event.ref.current, {
                            ...event.vars[0],
                            scrollTrigger: {
                                trigger: globalScrolls[event.name].ref.current,
                                ...globalScrolls[event.name].scrollVars,
                                ...globalScrolls[event.name].start,
                                ...globalScrolls[event.name].end,
                            }
                        })
                    });
                }
            }
            return () => mm.revert();
        }*/

    },[globalScrolls[event.name]])

}


globalScroll.provider = ({children})=>{
    const [globalScrolls,setGlobalScrolls] = useState({})

    return(
        <GlobalScrollContext.Provider value={{globalScrolls,setGlobalScrolls}}>
            {children}
        </GlobalScrollContext.Provider>
    )
}