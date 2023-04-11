"use client";
import styles from './Canvas.module.scss'
import part from '@part'
import React, {useContext, useEffect, useMemo, useRef, useState} from "react";
import gsap from 'gsap'
import noise from './noise'
import noise2 from './noise2'
import images from "@public/img/bg.jpg";
const Canvas = React.forwardRef((props, ref) => {

    if(!ref) ref = useRef()

    const videoRef=useRef()

    let name = 'Canvas'
    props = part.propsSorting({props,ref, name})

    const [screenSize,setScreenSize] = useState({width:0,height:0})

    useEffect(()=>{

        const canvas = ref.current
        const ctx = canvas.getContext("2d");

        gsap.ticker.add(()=>{
            ctx.drawImage(videoRef.current, 0, 0, 100, 100);
        });



    },[])

//<canvas width={800} height={500} className={styles.Canvas} {...props.attributes} style={{opacity:props.noise.opacity??0.04}}>
    const childrenPassProps = part.childrenPassProps(props)
   // const childrenPassProps = useMemo(()=>part.childrenPassProps(props),[])
    return(
        <>
        <canvas width={100} height={100} className={styles.Canvas} {...props.attributes}>
            {childrenPassProps}
        </canvas>
            <part.video ref={videoRef}></part.video>
        </>
    )
})

export default Canvas