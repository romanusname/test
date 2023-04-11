"use client";
import styles from './Background.module.scss'
import part from '@part'
import React, {useContext, useEffect,useRef} from "react";
const Background = React.forwardRef((props, ref) => {

    if(!ref) ref = useRef()

    let name = 'background'
    props = part.propsSorting({props,ref, name})


    const childrenPassProps = part.childrenPassProps(props)
    return(
        <div className={styles.Background} {...props.attributes}>
            {childrenPassProps}
        </div>
    )
})

export default Background