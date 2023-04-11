"use client";
import styles from './Background.module.scss'
import part from '@part'
import React, {useContext, useEffect, useMemo, useRef} from "react";
import gsap from "gsap";
import {useCanvas} from '@hooks'
const Background = React.forwardRef((props, ref) => {

    if(!ref) ref = useRef()

/*    if(props.setModal) {
        const [show, setShow] = part.modals(props.setModal[0])
        props = {...props, show}
    }*/

   // const {canvas} = useCanvas()
   // const canvas = useRef()
   // const context = useRef();

    let name = 'background'
    props = part.propsSorting({props,ref, name})


    const childrenPassProps = part.childrenPassProps(props)
  //  const childrenPassProps = useMemo(()=>part.childrenPassProps(props),[])
//{props.noise && <part.canvas ref={canvas} noise={props.noise}></part.canvas>}
    return(
        <part.transition {...props} passRef={ref}>
            <div className={styles.Background} {...props.attributes}>
                {childrenPassProps}
            </div>
        </part.transition>
    )

})

export default Background