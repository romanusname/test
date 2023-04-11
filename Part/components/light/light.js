"use client";
import styles from './light.module.scss'
import part from '@part'
import React, {useContext, useEffect, useMemo, useRef} from "react";
const light = React.forwardRef((props, ref) => {

    if(!ref) ref = useRef()

    let name = 'light'
    props = part.propsSorting({props,ref, name})


  //  props.attributes.style.background = `radial-gradient(48% 48% at 50% 50%, ${props.style.color} 0%, rgba(28, 11, 65, 0) 93%)`
    props.attributes.style.background = `radial-gradient(circle, ${props.style.color} 0%, rgba(62,4,52,0) 60%)`

    const childrenPassProps = part.childrenPassProps(props)
 //   const childrenPassProps = useMemo(()=>part.childrenPassProps(props),[])
    return(
        <div className={styles.light} {...props.attributes}>
            {childrenPassProps}
        </div>
    )
})

export default light