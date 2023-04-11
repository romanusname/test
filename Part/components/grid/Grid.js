"use client";
import styles from './Grid.module.scss'
import part from '@part'
import React, {useMemo, useRef} from "react";
const Grid = React.forwardRef((props, ref) => {
    let name = 'grid'
    if(!ref) ref = useRef()
  //  props = part.propsParsing({props, name})
    props = part.propsSorting({props,ref, name})

  //  props.style.gridTemplateAreas = '"g1 g2 g3 " "g1 g4 g5 "';


 //   const childrenPassProps = useMemo(()=>part.childrenPassProps(props),[])
    const childrenPassProps = part.childrenPassProps(props)
    return(
        <div className={styles.Grid} {...props.attributes}>
            {childrenPassProps}
        </div>
    )
})
export default Grid