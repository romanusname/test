"use client";
import styles from './scrollBar.module.scss'
import React, {useRef, useState} from "react";
import part from "@part";
const scrollBar = React.forwardRef((props, ref) => {

    if(!ref) ref = useRef()
    let name = 'scrollBar'
    props = part.propsSorting({props,ref, name})
    let childrenPassProps = part.childrenPassProps(props)

    return(
        <>
            <div className={styles.scrollBar}>
                <div className={styles.c}></div>
            </div>
            {childrenPassProps}
        </>
    )
})

export default scrollBar