"use client";
import part from '@part'
import React, {useContext, useEffect,useRef} from "react";
import styles from "./Compound.module.scss";
const Compound = React.forwardRef((props, ref) => {
    if(!ref) ref = useRef()

    let name = 'compound'
    props = part.propsSorting({props,ref, name})

  //  const childrenPassProps = part.childrenPassProps(props)
//fill="transparent"
    return(
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className={`${styles.Compound} ${props.className}`} {...props.attributes}>
            <path fill='#3399ff' stroke="transparent" {...props.pathAttributes}/>
        </svg>
    )

})

export default Compound