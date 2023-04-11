"use client";
import styles from './table.module.scss'
import part from '@part'
import React, {useContext, useEffect,useRef,useMemo,useCallback,useLayoutEffect,useState} from "react";
const th = React.forwardRef((props, ref) => {
    if(!ref) ref = useRef()
    let name = 'th'
    props = part.propsSorting({props,ref, name})


    let childrenPassProps = part.childrenPassProps(props)
    return(
        <th className={`${styles.th}`} {...props.attributes}>
            {childrenPassProps}
        </th>
    )
})

export default th