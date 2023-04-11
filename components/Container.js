"use client";
import gsap from 'gsap'
import React,{useEffect,useState,useRef} from 'react'
import ScrollTrigger from "gsap/ScrollTrigger";
export default function Container(props) {
    const ref = useRef();
    const [state, setState] = useState(true);

    console.log('CONTAINER')

/*    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const mm = gsap.matchMedia();
        mm.add("(max-width: 399px)", () => {
            setState(false);
            console.log('max')
        });
        mm.add("(min-width: 400px)", () => {
            setState(true);
            gsap.to(ref.current, {
                scrollTrigger: {
                    trigger: ref.current,
                    pin: true
                }
            });
            console.log('min')
        });
        return () => mm.revert();
    }, []);*/

    if (!state) return props.children;

    if (state) return <section ref={ref}>{props.children}</section>;
}