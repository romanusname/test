"use client";
import part from '@part'
import styles from './horizontal.module.scss'
import React, {useContext, useEffect,useRef,useMemo,useCallback,useLayoutEffect,useState} from "react";
import gsap from "gsap";
import {Draggable} from "gsap/Draggable";
import responsiveConfig from "@config/responsive.config";
const horizontal = React.forwardRef((props, ref) => {
    const {smoother} = part.scrollSmoother()


    const {responsive,setResponsive} = part.responsive.context()
   // props.onHorizontal.responsive = responsive
    if(!ref) ref = useRef()
    let name = 'horizontal'
    props = part.propsSorting({props,ref, name})
    props.pass = {...props.pass,display:'inline-grid',verticalAlign:'bottom'}



    let childrenPassProps = part.childrenPassProps(props)

    if(responsive=='mobile'){
        return childrenPassProps
    }

    return(
        <div className={styles.section} {...props.attributes}>
                {childrenPassProps}
        </div>
    )


})

export default horizontal