"use client";
import styles from './placeholder.module.scss'
import React, {useEffect, useRef, useState} from "react";
import part from "@part";
import inputConfig from "@config/input.config";

const placeholder = React.forwardRef((props, ref) => {
    if(!ref) ref = useRef()
    let name = 'placeholder'
    props = part.propsSorting({props,ref, name})
    let value = inputConfig[props.id]



    return(

        <div className={styles.placeholder} {...props.attributes}>
            {value}
        </div>

    )
})

export default placeholder