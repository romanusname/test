"use client";
import gsap from 'gsap'
//import initTl from '../initTl'
import part from "@part";
import eventResponsive from '../eventResponsive'

export default function onClick(event) {

    event.timeline = gsap.timeline({paused:true})
    event.direction = 'to'
    event.add = add
    part.globalTimeline.create(event)


    function add(event) {
        eventResponsive(event,'click','play')
       // event.ref.current.addEventListener('click', () => event.globalTimeline.play())
    }



}




/*
function eventResponsive(event,type){
    const func = ()=> event.globalTimeline.play()
    let mm = gsap.matchMedia();

    if(event.allow.includes('computer')) {

        let min = 401
        let max = 700

        mm.add('(min-width: 401px) and (max-width: 700px)', () => {
            // event.ref.current.addEventListener(type, func)
            console.log('MIDDLE')
        })


        /!*if(event.allow.includes('all')){
        event.ref.current.addEventListener(type, func);
    }*!/

        /!*mm.add(responsiveConfig.computer, () => {
            event.ref.current.addEventListener(type, func)
            console.log('COMPUTER')
        });

        mm.add(responsiveConfig.middle, () => {
            console.log('MIDDLE')
        });

        mm.add(responsiveConfig.mobile, () => {
            event.ref.current.removeEventListener(type, func);
            console.log('MOBILE')
        });*!/
    }

}*/
