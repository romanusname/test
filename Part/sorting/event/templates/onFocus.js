"use client";
import gsap from 'gsap'
import part from "@part";

export default function onFocus(event) {

    event.timeline = gsap.timeline({paused:true})
    event.direction = 'to'
    event.add = add
    part.globalTimeline.create(event)

    function add(event) {
        event.ref.current.onfocus = ()=> event.globalTimeline.play()
        event.ref.current.onblur = ()=> event.globalTimeline.reverse()
    }

}