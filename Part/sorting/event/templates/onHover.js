"use client";
import gsap from 'gsap'
import part from "@part";
import eventResponsive from '../eventResponsive'

export default function onHover(event) {
    event.timeline = gsap.timeline({paused:true})
    event.direction = 'to'
    event.add = add
    part.globalTimeline.create(event)


    function add(event) {
        eventResponsive(event,'mouseover','play')
        eventResponsive(event,'mouseout','reverse')

      //  event.ref.current.addEventListener('mouseover', () => event.globalTimeline.play())
      //  event.ref.current.addEventListener('mouseout', () => event.globalTimeline.reverse())
    }



}