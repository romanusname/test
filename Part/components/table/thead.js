"use client";
import styles from './table.module.scss'
import part from '@part'
import React, {useContext, useEffect,useRef,useMemo,useCallback,useLayoutEffect,useState} from "react";
const thead = React.forwardRef((props, ref) => {
    if(!ref) ref = useRef()
    let name = 'thead'
    props = part.propsSorting({props,ref, name})


    let childrenPassProps = part.childrenPassProps(props)
    return(
        <thead className={`${styles.thead}`} {...props.attributes}>
            {childrenPassProps}
        </thead>
    )
})

export default thead