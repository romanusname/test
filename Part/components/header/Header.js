"use client";
import styles from './Header.module.scss'
import React, {useEffect, useMemo, useRef} from 'react'
import part from '@part'
//export default function Header({children,long='75px',area='top'}){
const Header = React.forwardRef((props, ref) => {
    if(!ref) ref = useRef()
    let name = 'header'
    props = part.propsSorting({props,ref, name})

/*    if(props.style.side=='top'){
        props.style.width= '100%'
       // props.style.height = props.style.height ?? '75px'
        props.style.height = props.style.height
        props.pass.direction = 'horizontal'
        props.style.flexDirection = 'row'
    }

    if(props.style.side=='bottom'){
        props.style.width= '100%'
        props.style.height = props.style.height
        props.style.bottom = 0
        props.style.direction = 'horizontal'
        props.style.flexDirection = 'row'
    }

    if(props.style.side=='left'){
        props.style.width = props.style.height
        props.style.height = '100%'
        props.pass.direction = 'vertical'
        props.style.flexDirection = 'column'
    }

    if(props.style.side=='right'){
        props.style.width = props.style.height
        props.style.height = '100%'
        props.style.right = 0
        props.pass.direction = 'vertical'
        props.style.flexDirection = 'column'
    }*/


  //  const childrenPassProps = useMemo(()=>part.childrenPassProps(props),[])
    const childrenPassProps = part.childrenPassProps(props)
    return(
        <header className={styles.Header} {...props.attributes}>
            {childrenPassProps}
        </header>
    )
})
export default Header