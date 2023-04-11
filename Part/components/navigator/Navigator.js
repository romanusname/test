"use client";
import styles from './Navigator.module.scss'
import React, {useRef, useEffect, useState, useCallback, useMemo} from "react";
import part from '@part'
const Navigator = React.forwardRef((props, ref) => {
    if(!ref) ref = useRef()
    let name = 'navigator'
    props = part.propsSorting({props,ref, name})


    const childrenPassProps = part.childrenPassProps(props)

    return(
        <nav className={styles.Navigator} {...props.attributes}>
            {childrenPassProps}
        </nav>
    )
})

export default Navigator