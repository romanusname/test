"use client";
import styles from './Canvas.module.scss'
import part from '@part'
import React, {useContext, useEffect, useRef, useState} from "react";
import noise from './noise'
import noise2 from './noise2'
import images from "@public/img/bg.jpg";
const Canvas = React.forwardRef((props, ref) => {

    if(!ref) ref = useRef()

    let name = 'Canvas'
    props = part.propsSorting({props,ref, name})

    const [screenSize,setScreenSize] = useState({width:0,height:0})

    useEffect(()=>{
      //  window.addEventListener("resize", handleResize);

        const canvas = ref.current
        const ctx = canvas.getContext("2d");
      //  canvas.width = canvas.height = 128


       // resize(ctx)
       // window.onresize = resize;

        function resize() {
            canvas.width = window.innerWidth * window.devicePixelRatio
            canvas.height = window.innerHeight * window.devicePixelRatio
            canvas.style.width = window.innerWidth + 'px'
            canvas.style.height = window.innerHeight + 'px'
        }

      //  noise(ctx,props.noise)
      //  noise2(ctx)


    },[])

//<canvas width={800} height={500} className={styles.Canvas} {...props.attributes} style={{opacity:props.noise.opacity??0.04}}>
    const childrenPassProps = part.childrenPassProps(props)
    return(
        <canvas width={800} height={500} className={styles.Canvas} {...props.attributes} style={{opacity:props.noise.opacity??0.04}}>
            {childrenPassProps}
        </canvas>
    )
})

export default Canvas