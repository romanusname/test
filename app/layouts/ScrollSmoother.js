"use client";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import {useEffect,useRef,useInsertionEffect} from "react";
import part from '@part'

export default function ScrollSmootherModule() {
    const {setSmoother} = part.scrollSmoother()

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
        let smoother = ScrollSmoother.create({
            smooth: 1,               // how long (in seconds) it takes to "catch up" to the native scroll position
            effects: true,           // looks for data-speed and data-lag attributes on elements
            smoothTouch: 0.1,        // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
          //  normalizeScroll: true,
            wholePixels: true,
        });
        setSmoother(smoother)
    },[])
}