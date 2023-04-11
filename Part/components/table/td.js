"use client";
import styles from './table.module.scss'
import part from '@part'
import React, {useContext, useEffect,useRef,useMemo,useCallback,useLayoutEffect,useState} from "react";
const td = React.forwardRef((props, ref) => {
    if(!ref) ref = useRef()
    let name = 'td'
    props = part.propsSorting({props,ref, name})


    let childrenPassProps = part.childrenPassProps(props)
    return(
        <td className={`${styles.td}`} {...props.attributes}>
            {childrenPassProps}
        </td>
    )
})

export default td