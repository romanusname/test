"use client";
import styles from './label.module.scss'
import React, {useRef} from "react";
import gsap from 'gsap'
import { Transition } from "react-transition-group";
import part from "@part";
const label = React.forwardRef((props, ref) => {
    if(!ref) ref = useRef()
    let name = 'label'
    props = part.propsSorting({props,ref, name})


    return(

        <label className={styles.label} {...props.attributes}>
            {props.children}
        </label>

    )
})
export default label