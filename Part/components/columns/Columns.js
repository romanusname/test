"use client";
import styles from './Columns.module.scss'
import part from '@part'
import {useMemo} from "react";
export default function Columns(props) {
    let name = 'columns'
    props = part.propsParsing({props,name})

    props.style.columns = 3
    const childrenPassProps = part.childrenPassProps(props)
   // const childrenPassProps = useMemo(()=>part.childrenPassProps(props),[])
    return(
        <div style={{...props.style}} className={styles.Columns}>
            {childrenPassProps}
        </div>
    )
}