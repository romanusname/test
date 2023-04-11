"use client";
import styles from './backgroundCanvas.module.scss'
import part from '@part'
import images from '@public/img/bg.jpg'
import React, {useContext, useEffect, useMemo, useRef, useState} from "react";
const backgroundCanvas = React.forwardRef((props, ref) => {

    if(!ref) ref = useRef()

    let name = 'backgroundCanvas'
    props = part.propsSorting({props,ref, name})


 //   const screenWidth = window.screen.width
  //  const screenHeight = window.screen.height

    const [screenSize,setScreenSize] = useState({width:0,height:0})

    function handleResize() {
        console.log('Resize')
        setScreenSize({width: window.screen.width,height: window.screen.height})
    }

    useEffect(()=>{
        setScreenSize({width: window.screen.width,height: window.screen.height})
        window.addEventListener("resize", handleResize);

        const canvas = ref.current
        const ctx = canvas.getContext("2d");

        const image = new Image();
        image.src = images.src
        /*image.onload = () => {
            ctx.drawImage(image, 0, 0);
        };*/


        function noise(ctx) {

            const w = 500,
                h = 200,
                iData = ctx.createImageData(w, h),
                buffer32 = new Uint32Array(iData.data.buffer),
                len = buffer32.length
            let i = 0

            for(; i < len;i++)

                if (Math.random() < 0.5) buffer32[i] = 0xffffffff;

            ctx.putImageData(iData, 0, 0);
        }

        (function loop() {
            noise(ctx);
            requestAnimationFrame(loop);
        })();


       // ctx.drawImage(image, 33, 71, 104, 124, 21, 20, 87, 104);
    },[])


    const childrenPassProps = part.childrenPassProps(props)
   // const childrenPassProps = useMemo(()=>part.childrenPassProps(props),[])
    return(
        <canvas className={styles.backgroundCanvas} {...props.attributes} width={screenSize.width} height={screenSize.height}>
            {childrenPassProps}
        </canvas>
    )
})

export default backgroundCanvas