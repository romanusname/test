"use client";
import styles from './switcher.module.scss'
import React, {useRef, useEffect, useMemo} from "react";
import gsap from 'gsap'
import { Transition } from "react-transition-group";
import part from "@part";
const switcher = React.forwardRef((props, ref) => {
  //  const [target,setTarget] = part.modals.target('auth')

    if(!ref) ref = useRef()
    let name = 'switch'
    props = part.propsSorting({props,ref, name})

/*    useEffect(()=>{
        console.log(target)
        props.pass.show = true
      //  console.log(props.children[target].props.show)
      //  props.children[target].props.show = true
    },[target])*/
    const childrenPassProps = part.childrenPassProps(props)
  //  const childrenPassProps = useMemo(()=>part.childrenPassProps(props),[])

   // childrenPassProps = childrenPassProps[1]
   // console.log(childrenPassProps)

    return(

        <div className={styles.switch} {...props.attributes}>
            {childrenPassProps}
        </div>

    )
})
export default switcher
