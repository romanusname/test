"use client";
import styles from './table.module.scss'
import part from '@part'
import gsap from 'gsap'
import React, {useContext, useEffect,useRef,useMemo,useCallback,useLayoutEffect,useState} from "react";
const tr = React.forwardRef((props, ref) => {
    if(!ref) ref = useRef()
    let name = 'tr'
    props = part.propsSorting({props,ref, name})

    /*useEffect(()=>{
        gsap.from(ref.current,{
            opacity:0,
            duration:2
        })
    },[props])*/

    let childrenPassProps = part.childrenPassProps(props)
    return(
        <tr className={`${styles.tr}`} {...props.attributes}>
            {childrenPassProps}
        </tr>
    )
})

export default tr