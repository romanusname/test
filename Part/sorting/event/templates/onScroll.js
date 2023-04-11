import gsap from "gsap";
import part from "@part";
import {useEffect} from "react";
import scrollResponsive from "../scrollResponsive";

export default function onScroll(event) {

    event.scrollVars = {scrub:true}
    event.trigger = event.ref
    part.globalScroll.create(event)

    useEffect(()=>{
        scrollResponsive(event)
    },[])


}