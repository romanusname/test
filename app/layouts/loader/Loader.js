"use client";
import React,{useEffect,useRef} from "react";
import styles from './Loader.module.scss'
import global from './global.css'
import gsap from 'gsap'
export default function Loader() {
    const ref = useRef()


    useEffect(()=>{
        gsap.to(ref.current,{
            opacity:0,
            duration:0.5,
            display:'none',
            overflow: 'none',
            delay:0.2
        })
            gsap.to(['body','html'],{
                overflow: 'visible'
            })

    },[])

    return(
        <div ref={ref} className={styles.Loader}>Загрузка...</div>
    )
}