"use client";
import Image from 'next/image'
import React, {useContext, useRef,useEffect} from "react";
import part from "@part";
import styles from './Svg.module.scss'
import gsap from "gsap";
const svg = React.forwardRef((props, ref) => {

    if(!ref) ref = useRef()
    //  console.log(props) // direction вырезается, а не хотелось бы
    let name = 'image'
    let src = props.src
    props = part.propsSorting({props,ref, name})

  //  useEffect(()=>{
      //  console.log(ref.current.getBoundingClientRect())
   // },[])

//<img {...props.attributes} className={styles.Svg} {...props.events} style={{...props.style}} ref={ref} src={`./static/${src}.svg`}/>
    return (
        <img className={styles.Svg} src={`./static/${src}.svg`} {...props.attributes}/>
    )
})

export default svg