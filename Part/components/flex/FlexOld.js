"use client";
import styles from './Flex.module.scss'
import part from '@part'
import React, {useContext, useEffect,useRef} from "react";
const Flex = React.forwardRef((props, ref) => {

    if(!ref) ref = useRef()

    let name = 'flex'
  //  props = part.propsSorting({props,ref, name})
    props = part.propsParsing({props,ref, name})


    if(!props.style.justifyContent) props.style.justifyContent = 'space-around'
    if(!props.style.direction) props.style.direction='horizontal'

    if(props.style.direction=='horizontal'){
        props.style.flexDirection = 'row';
        props.style.width = props.style.width
        props.style.height = props.style.height

        props.pass.direction = 'horizontal'
    }

    if(props.style.direction=='vertical'){
        props.style.flexDirection = 'column';
      //  props.style.height = props.style.width
        let temp = props.style.width
        props.style.width = props.style.height
        props.style.height = temp

        props.pass.direction = 'vertical'
    }


    const childrenPassProps = part.childrenPassProps(props)
    //<div {...props.events} ref={ref} style={{...props.style}} className={`${styles.Flex} ${props.className}`}>

    return(
        <div {...props.attributes} className={`${styles.Flex} ${props.className}`}>
            {childrenPassProps}
        </div>
    )
})

export default Flex