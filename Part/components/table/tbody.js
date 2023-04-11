"use client";
import styles from './table.module.scss'
import part from '@part'
import React, {useContext, useEffect,useRef,useMemo,useCallback,useLayoutEffect,useState} from "react";
const tbody = React.forwardRef((props, ref) => {
    if(!ref) ref = useRef()
    let name = 'tbody'
    props = part.propsSorting({props,ref, name})


    let childrenPassProps = part.childrenPassProps(props)
    return(
        <tbody className={`${styles.tbody}`} {...props.attributes}>
            {childrenPassProps}
        </tbody>
    )
})

export default tbody