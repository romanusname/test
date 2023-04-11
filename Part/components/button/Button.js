"use client";
import styles from './Button.module.scss'
import React, {useContext, useRef} from "react";
import part from "@part";
//import {ModalsContext} from "@modules/Part/modals/index";
const Button = React.forwardRef((props, ref) => {
  //  const {state,setState} = useContext(ModalsContext)
 //   console.log(state)
    if(!ref) ref = useRef()
    let name = 'button'
    props = part.propsSorting({props,ref, name})

   // console.log('атрибуты',props.attributes)

    return(
        <button className={styles.Button} {...props.attributes}>
            {props.children}
        </button>
    )
})
export default Button
