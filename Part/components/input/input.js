"use client";
import styles from './input.module.scss'
import React, {useMemo, useRef, useState} from "react";
import part from "@part";
import placeholder from './placeholder/placeholder'
import inputConfig from "@config/input.config";
const input = React.forwardRef((props, ref) => {
  //  const [value,setValue] = useState('')
    const {formState, dispatch} = part.formContext()
    if(!ref) ref = useRef()
    let name = 'input'
    props = part.propsSorting({props,ref, name})
    const childrenPassProps = part.childrenPassProps(props)

    return(
        <>
            <input autoComplete={"on"} className={styles.input} onChange={(e)=>dispatch({type:`set${props.id}`,payload:e.target.value})} value={formState[props.id]} {...props.attributes}/>
            {childrenPassProps}
        </>
    )
})
input.placeholder = placeholder
export default input