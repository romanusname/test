"use client";
import styles from './modal.module.scss'
import React, {useEffect, useMemo, useRef} from "react";
import Window from './window'
import part from "@part";
const modal = React.forwardRef((props, ref) => {
  //  console.log('modal show', props.show)
    if(!ref) ref = useRef()
    let name = 'modal'

    if(props.show){
            if(typeof props.show == 'string') {
                const [show, setShow] = part.modals(props.show)
                props = {...props, show}
            }
        if(typeof props.show == 'boolean') {
            const show = props.show
            props = {...props, show}
        }
    }

    props = part.propsSorting({props,ref, name})


    const childrenPassProps = part.childrenPassProps(props)

    return(
        <part.transition {...props} passRef={ref}>
        <div className={styles.modal} {...props.attributes}>
            {childrenPassProps}
        </div>
        </part.transition>
    )
})
modal.window = Window
export default modal
