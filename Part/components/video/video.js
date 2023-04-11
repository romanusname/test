"use client";
//import videotest from '@public/video/video.mp4'
import styles from './video.module.scss'
import part from '@part'
import React, {useContext, useEffect,useRef,useMemo,useCallback} from "react";
const Video = React.forwardRef((props, ref) => {
    if(!ref) ref = useRef()

    let name = 'video'
    props = part.propsSorting({props,ref, name})

    // const childrenPassProps = useMemo(()=>part.childrenPassProps(props),[])
    const childrenPassProps = part.childrenPassProps(props)
    return(
        <video autoPlay muted loop className={`${styles.Video}`} {...props.attributes}>
            <source src='/static/video.mp4' type="video/mp4"/>
        </video>
    )
})

export default Video