"use client"
import styles from './Slider.module.scss'
import part from '@part'
import gsap from 'gsap'
import {Window} from './Window'
import React,{useEffect,useRef} from 'react'
export const Slider = React.forwardRef((props, ref) => {
    if(!ref) ref = useRef()
    const windowsRef = useRef()
    let name = 'slider'
    props = part.propsSorting({props,ref, name})

/*    function next() {
        gsap.to(windowsRef.current,{
            translateX:-900,
            duration:1
        })
    }*/

    const childrenPassProps = part.childrenPassProps(props,false,name)
    return(
        <div className={styles.Slider} style={{...props.style}} ref={ref}>
            {/*<part.Button position={'absolute'} zIndex={100}>left</part.Button>*/}

            {childrenPassProps}

        </div>
    )
})
Slider.Window = Window