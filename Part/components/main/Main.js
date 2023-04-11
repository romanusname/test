"use client";
import React, {useEffect, useRef, useState, useContext, createContext, useMemo} from 'react'
import gsap from 'gsap'
import part from '@part'
import styles from './Main.module.scss'

//import mediaQuery from "@modules/Part/services/mediaQuery";
const Main = React.forwardRef((props, ref) => {
    if(!ref) ref = useRef()
    let name = 'main'
    props = part.propsSorting({props,ref, name})

 //   console.log('main',props.email)

/*    let nChild = React.Children.map(props.children, child => {

        if (child.type=='section') {
            return React.cloneElement(<part.Section/>, {...props.pass,...child.props})
        }
       // return child;
    });*/

    const childrenPassProps = part.childrenPassProps(props)
  //  const childrenPassProps = useMemo(()=>part.childrenPassProps(props),[])

    return(
            <main className={'main'} {...props.attributes}>
                {childrenPassProps}
            </main>
    )
})


export default Main