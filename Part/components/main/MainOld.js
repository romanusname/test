"use client";
import React, {useEffect, useRef,useState, useContext, createContext} from 'react'
import gsap from 'gsap'
import part from '@part'
import styles from './Main.module.scss'

//import mediaQuery from "@modules/Part/services/mediaQuery";
const Main = React.forwardRef((props, ref) => {
    if(!ref) ref = useRef()
    let name = 'main'
    props = part.propsParsing({props, name,ref})

    console.log(props.children)


    const childrenPassProps = part.childrenPassProps(props)

    return(
            <main {...props.attributes}>
                {childrenPassProps}
            </main>
    )
})


export default Main