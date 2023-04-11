"use client";
//import React, {useRef,useEffect,useState} from "react";
//import gsap from 'gsap'
//import {ScrollTrigger} from "gsap/ScrollTrigger";
import animates from '@config/animate.config'
import templates from './templates'
//import { v4 as uuidv4 } from 'uuid';
export default function index(eventsTemplate, ref, name,style) {

    function getEvent(name){
        let event = {
            name:name,
            ref:ref,
            vars:eventsTemplate[name],
            section:style.section,
           // id:eventsTemplate[name][0]?.id ?? eventsTemplate[name].id,
            id:eventsTemplate[name][0].id,
            tlSetting:eventsTemplate[name][0].tlSetting
        }
        delete event.vars.id
        delete event.vars.tlSetting
        return event
    }

    if(eventsTemplate.onHover){
        let event = getEvent('onHover')
        templates.onHover(event)
    }

    if(eventsTemplate.onHoverYoyo){
        let event = getEvent('onHoverYoyo')
        templates.onHoverYoyo(event)
    }

    if(eventsTemplate.onFocus){
        templates.onFocus({eventsTemplate, ref, name})
    }

    if(eventsTemplate.onClick){
        templates.onClick({eventsTemplate, ref, name})
    }

    if(eventsTemplate.pin){
        templates.pin({eventsTemplate, ref, name})
    }

    if(eventsTemplate.onScroll){
        templates.onScroll({eventsTemplate, ref, name})
    }

    if(eventsTemplate.onRepeat){
        templates.onRepeat({eventsTemplate, ref, name})
    }

    if(eventsTemplate.onYoyo){
        templates.onYoyo({eventsTemplate, ref, name})
    }

    if(eventsTemplate.scrollToUp || eventsTemplate.scrollToDown){
        templates.scrollTo({eventsTemplate, ref, name})
    }

    if(eventsTemplate.pressure){
        templates.pressure({eventsTemplate, ref, name})
    }

    if(animates.defaultStart && animates[name]){
        templates.startDefault({eventsTemplate, ref, name})
    }

    if(eventsTemplate.onStart){
        templates.onStart({eventsTemplate, ref, name})
    }

    //scrollMove


  //  return eventsTemplate
}

















///////////////
/*
"use client";
//import gsap from 'gsap'
//import {ScrollTrigger} from "gsap/ScrollTrigger";
import animates from '@setting/animates'
import templates from './templates'
import { v4 as uuidv4 } from 'uuid';
export default function index(eventsTemplate, ref, name,style) {

    function getEvent(name){
        let event = {
            name:name,
            ref:ref,
            vars:eventsTemplate[name],
            section:style.section,
            id:eventsTemplate[name].id
        }
        if(!event.id) event.id = uuidv4()
        // if(!Array.isArray(event.vars)) event.vars = [event.vars]
        delete event.vars.id
        return event
    }


    if(eventsTemplate.onHover){
        let event = getEvent('onHover')
        // console.log(event)
        templates.onHover(event)
    }

    if(eventsTemplate.onFocus){
        templates.onFocus({eventsTemplate, ref, name})
    }

    if(eventsTemplate.onClick){
        templates.onClick({eventsTemplate, ref, name})
        // let event = getEvent('onClick')
        // templates.onClick(event)
    }

    if(eventsTemplate.pin){
        templates.pin({eventsTemplate, ref, name})
    }

    if(eventsTemplate.onScroll){
        templates.onScroll({eventsTemplate, ref, name})
    }

    if(eventsTemplate.onRepeat){
        templates.onRepeat({eventsTemplate, ref, name})
    }

    if(eventsTemplate.onYoyo){
        templates.onYoyo({eventsTemplate, ref, name})
    }

    if(eventsTemplate.scrollToUp || eventsTemplate.scrollToDown){
        templates.scrollTo({eventsTemplate, ref, name})
    }

    if(eventsTemplate.pressure){
        templates.pressure({eventsTemplate, ref, name})
    }

    if(animates.defaultStart && animates[name]){
        templates.startDefault({eventsTemplate, ref, name})
    }

    if(eventsTemplate.onStart){
        templates.onStart({eventsTemplate, ref, name})
    }

    //scrollMove


    //  return eventsTemplate
}*/
