"use client";
import styles from './Flex.module.scss'
import part from '@part'
import React, {useContext, useEffect,useRef,useMemo,useCallback,useLayoutEffect,useState} from "react";
const Flex = React.forwardRef((props, ref) => {
    if(!ref) ref = useRef()
    const [width, setWidth] = useState(0);
    let name = 'flex'
    props = part.propsSorting({props,ref, name})

    /*useEffect(()=>{
        setTimeout(()=>setWidth(5),2000)
    },[])*/

    let childrenPassProps = part.childrenPassProps(props)
    return(
        <div className={`${styles.Flex}`} {...props.attributes}>
            {childrenPassProps}
        </div>
    )
})

export default Flex