"use client";
import {createContext, useContext, useEffect, useState} from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
export const smootherContext = createContext({})
export default function scrollSmoother() {
    const {smoother,setSmoother} = useContext(smootherContext)
    return {smoother,setSmoother}
}

scrollSmoother.provider = ({children})=>{
    const [smoother,setSmoother] = useState()


    return (
        <smootherContext.Provider value={{smoother,setSmoother}}>
            {children}
        </smootherContext.Provider>
    )
}