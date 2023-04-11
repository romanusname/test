"use client";
import styles from './Group.module.scss'
import React, {useRef, useEffect, useState, useCallback, useMemo} from "react";
import part from '@part'

const Group = React.forwardRef((props, ref) => {
    const [state,setState] = useState(0)
//const Group = (props)=>{
    if(!ref) ref = useRef()
  //  const ref = useRef()
    let name = 'group'

    props = part.propsSorting({props, ref, name})


 //   props.attributes.style['@media (max-width: 600px)'] = {background: 'red'}
      //  props.attributes.style = "@media (max-width:300px){background:red}"


    /*useEffect(()=>{
        setTimeout(()=>setState(5),3000)
    },[])*/

    const childrenPassProps = part.childrenPassProps(props)
  //  const childrenPassProps = useMemo(()=>part.childrenPassProps(props),[])

    return(
        <div className={styles.Group} {...props.attributes}>
            {childrenPassProps}
        </div>
    )
}
)

export default Group