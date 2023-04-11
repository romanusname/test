import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import  {useEffect} from 'react'
export default function hover({eventsTemplate, ref, name}){
    gsap.registerPlugin({ScrollTrigger})
    let scrollToDown = gsap.timeline({paused:true})
    let scrollToUp = gsap.timeline({paused:true})
    useEffect(()=>{
        if(eventsTemplate.scrollToUp || eventsTemplate.scrollToDown){
            if(eventsTemplate.scrollToDown) scrollToDown.to(ref.current,eventsTemplate.scrollToDown)
            if(eventsTemplate.scrollToUp) scrollToUp.to(ref.current,eventsTemplate.scrollToUp)
            ScrollTrigger.create({
                onUpdate: (self) => {
                    if (self.direction !== self.prevDirection) {
                        if(eventsTemplate.scrollToUp && !eventsTemplate.scrollToDown) {
                            if (self.direction == -1) scrollToUp.play()
                            if (self.direction == 1) scrollToUp.reverse()
                        }
                        if(eventsTemplate.scrollToDown && !eventsTemplate.scrollToUp) {
                            if (self.direction == 1) scrollToDown.play()
                            if (self.direction == -1) scrollToDown.reverse()
                        }
                        self.prevDirection = self.direction;
                    }
                }
            });
        }
    },[])
}