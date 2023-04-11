"use client";
import { Transition } from "react-transition-group";
import gsap from "gsap";
import part from "@part";
import getVars from "../../sorting/globalTimeline/getVars";

export default function transition(props) {

    if(!props.transition){
        return props.children
    }


    /*    if(props.show){
            const [show, setShow] = part.modals(props.show)
            props = {...props, show}
        }*/

    if(props.setModal) {
        const [show, setShow] = part.modals(props.setModal[0])
        props = {...props, show}
    }


    return(
        <Transition
            mountOnEnter
            unmountOnExit
            in={props.show}
            addEndListener={(node, done) => {
                const ctx = gsap.context(() => {
                    //  let tl = gsap.timeline({paused:true,onComplete: done})

                    if (props.show) {
                        const tlopen = gsap.timeline({ onComplete: done })
                        for (let i in props.transition.vars){ //.vars
                            let vars = getVars(props.transition,i)
                             tlopen.from(props.transition.ref.current,vars,0)
                        }
                    } else {
                        const tlclose = gsap.timeline({ onComplete: done })
                        if(props.reverseTransition)
                        for (let i in props.reverseTransition.vars){
                            let vars = getVars(props.reverseTransition,i)
                             tlclose.to(props.reverseTransition.ref.current,vars,0)
                        }
                        if(!props.reverseTransition)
                            for (let i in props.transition.vars){
                                let vars = getVars(props.transition,i)
                                tlclose.to(props.transition.ref.current,vars,0)
                        }
                    }
                }, node);

                // document.body.classList.toggle("overflow-hidden");
            }}
        >
            {props.children}
        </Transition>
    )
}