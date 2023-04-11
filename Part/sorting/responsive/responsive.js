"use client";
import {createContext, useState, useContext, useEffect} from "react";
import gsap from "gsap";
import responsiveConfig from "@config/responsive.config";
export const ResponsiveContext = createContext('computer')
export default function responsive() {

}

function Provider({children}){
    const [responsive,setResponsive] = useState('computer')
    const [mm] = useState(gsap.matchMedia())

    useEffect(()=>{
        mm.add(responsiveConfig.mobile, () => {
            setResponsive('mobile')
        });

        mm.add(responsiveConfig.middle, () => {
            setResponsive('middle')
        });

        mm.add(responsiveConfig.computer, () => {
            setResponsive('computer')
        });

        return () => mm.revert();
    },[])

    return(
        <ResponsiveContext.Provider value={{ responsive,setResponsive,mm }}>
            {children}
        </ResponsiveContext.Provider>
    )
}


function context(){
    const {responsive,setResponsive,mm} = useContext(ResponsiveContext)
    return {responsive,setResponsive,mm}
}



/*
function mediaQuery() {
    const {responsive,setResponsive} = useContext(ResponsiveContext)

    useEffect(()=>{
        console.log(responsive)

        let mm = gsap.matchMedia();

        mm.add("(max-width: 700px)", () => {
            setResponsive('mobile')
        });

        mm.add("(min-width: 701px)", () => {
            setResponsive('computer')
        });

        //  mm.revert();

    },[])
}
*/

responsive.Provider = Provider
responsive.context = context
//responsive.MediaQuery = mediaQuery