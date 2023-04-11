"use client";
import gsap from "gsap";
import  {useEffect,useState} from 'react'
import part from "@part";
import responsiveConfig from "@config/responsive.config";
import scrollResponsive from "../scrollResponsive";
export default function onHorizontal(event) {
    const {responsive, setResponsive} = part.responsive.context()
    event.responsive = responsive

    event.trigger = event.ref
    event.scrollVars = {pin:true,scrub:true,pinSpacing: true}
    event.start = 'top top'
//    part.globalScroll.create(event)



   // if(!event.allow && !event.disable){
        useEffect(() => {
            let mm = gsap.matchMedia();

            mm.add('(min-width: 701px)', () => {
                console.log(event.responsive)
                if (event.responsive == 'mobile') return;
                gsap.to(event.ref.current, {
                    ...event.vars[0],
                    scrollTrigger: {
                        trigger: event.ref.current,
                        ...event.scrollVars,
                        ...event.start,
                        ...event.end,
                    }
                })
            });

            return () => mm.revert();
        }, [event.responsive]);
  //  }

 /*   useEffect(() => {
        let mm = gsap.matchMedia();

        if(event.allow){
            for (const key in responsiveConfig) {
                // console.log('ALLOW',event.allow[0],key)
                if(event.allow.includes(key)){
                    console.log('ALLOW',responsiveConfig[key])
                    mm.add(responsiveConfig[key], () => {
                        if (responsive == 'mobile') return;
                        gsap.to(event.ref.current, {
                            ...event.vars[0],
                            //  ease:'none',
                            scrollTrigger: {
                                trigger: event.ref.current,
                                ...event.scrollVars,
                                ...event.start,
                                ...event.end,
                            }
                        })
                    });
                }
            }
        }

        return () => mm.revert();
    }, [responsive]);*/




}