"use client";
import React, {useRef, useState, useEffect} from 'react'
import gsap from 'gsap'
import part from '@part'
import styles from './Section.module.scss'
const Section = React.forwardRef((props, ref) => {

    if(!ref) ref = useRef()
    let name = 'section'
    props = part.propsSorting({props,ref, name})

    const childrenPassProps = part.childrenPassProps(props)


    return(
        <section className={styles.Section} {...props.attributes}>
            {childrenPassProps}
        </section>
    )
})


export default Section