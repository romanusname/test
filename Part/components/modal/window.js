"use client";
import styles from './window.module.scss'
import React, {useEffect,useRef} from "react";
import gsap from 'gsap'
import { Transition } from "react-transition-group";
import part from "@part";
const Window = React.forwardRef((props, ref) => {
    if(!ref) ref = useRef()
    let name = 'window'
    props = part.propsSorting({props,ref, name})

  //  let show = true

/*    useEffect(()=>{
        console.log('Focus Modal')
        ref.current.focus()
    },[])*/

    return(
/*        <Transition
            mountOnEnter
            unmountOnExit
            in={props.show}
            addEndListener={(node, done) => {
                const ctx = gsap.context(() => {
                    if (props.show) {
                        // gsap.set(ref.current, { opacity:0 });
                        gsap
                            .timeline({ onComplete: done })
                            .from(ref.current, props.transition)
                    } else {
                        gsap
                            .timeline({ onComplete: done })
                            .to(ref.current, props.transition)
                    }
                }, node);

                // document.body.classList.toggle("overflow-hidden");
            }}
        >*/

            <div {...props.attributes} onClick={(e)=>e.stopPropagation()} className={styles.Window}>
                {props.children}
            </div>


       /* </Transition>*/
    )
})
export default Window
