"use client";
import {useContext, useMemo, useEffect, useRef} from 'react'
import cssProperties from './sorting/cssProperties'

import addEventListener from "./event/addEventListener";
import getEvent from "./getEvent";
import part from "@part";
import constructor from "@config/mods/constructor.mod"
import getAttributes from "./getAttributes/getAttributes";
import animateTemp from '@config/animate.template'
import mountLogMode from "@config/mods/mountLog.mode";

export default function propsSorting({props,ref,name}) {
    props = {...props}
    let style = {}
    let events = {}

    if(name) {
        if (constructor.active) props.background = constructor[name]
    }

    if(props.ssr) props.pass = {...props.pass,ssr:props.ssr}

    if(props.transition){
        let event = getEvent({props:props.transition, ref, key:'transition', value:props.transition})
        props.transition = event
    }

    if(props.reverseTransition){
        let event = getEvent({props:props.reverseTransition, ref, key:'transition', value:props.reverseTransition})
        props.reverseTransition = event
    }

    if(props.link){
        let event = useMemo(() => getEvent({props, ref, key:'link', value:props.link}), [])
        addEventListener(event)
    }

/*    if(props.mobile) {
        const {responsive,setResponsive} = part.responsive.context()

        if(responsive=='mobile') {
            props.responsiveState = 'mobile'
            console.log('mobile')
        }

        props.mobile = part.styleAbbreviations(props.mobile,name)
        props = part.styleAbbreviations(props,name)
        if(responsive=='mobile')  props = {...props,...props.mobile}
    }
    else props = part.styleAbbreviations(props,name)*/

   // props = part.styleAbbreviations(props,name)
    part.styleAbbreviations(props,name)

    if(props.value){
        if(!props.ssr[props.value[0]]) props.value = false
        else
        props.value = props.ssr[props.value[0]][props.value[1]]
    }

    if(!props.value){
        props.value = props.children
    }

        for (const key in props) {
            let value = props[key]

            if (cssProperties.includes(key)) {
                style[key] = value
            }

            if (key[0] == 'o' && key[1] == 'n') {

                if (typeof value == 'function') {
                    events[key] = value
                }

                if (typeof value == 'string') {
                    value = animateTemp[value]
                }

                if (typeof value == 'object' || typeof value == 'boolean')  {
                    let event = useMemo(() => getEvent({props, ref, key, value}), [])
                    addEventListener(event)
                }

            }

            if(key[0] == 't' && key[1] == 'l'){
             //   let tlid = key.slice(2).toLowerCase()
                let event = useMemo(() => getEvent({props, ref, key, value}), [])
                event.name = key.slice(2).toLowerCase()
                part.globalTimeline.connect(event)
            }

            if(key[0] == 's' && key[1] == 't'){
              //  let tlid = key.slice(2).toLowerCase()
                let event = useMemo(() => getEvent({props, ref, key, value}), [])
                event.name = key.slice(2).toLowerCase()
                part.globalScroll.connect(event)
            }

            if(key[0] == 's' && key[1] == 'e' && key[2] == 't'){
                let event = useMemo(() => getEvent({props, ref, key, value}), [])
                addEventListener(event)
            }


            if(key[0] == 'n' && key[1] == 'o' && key[2] == 't'){
                let event = useMemo(() => getEvent({props, ref, key, value}), [])
                addEventListener(event)
            }


            if (key[0] == 'i' && key[1] == 'f') {
                 //   let event = useMemo(() => getEvent({props, ref, key, value}), [])
                let event = getEvent({props, ref, key, value})
                    event.name='If'
                    addEventListener(event)

            }


        }

    if(props.speed){
        events['data-speed'] = props.speed
        delete props.speed
    }


    if(mountLogMode.active){
        console.log(name)
    }

    props = getAttributes({props,ref,events,style})

    return props

}