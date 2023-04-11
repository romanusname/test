"use client";
import React, {useContext, useRef} from "react";
import part from "@part";

const Date = React.forwardRef((props, ref) => {

    if(!ref) ref = useRef()
    let name = 'date'
    props = part.propsSorting({props,ref, name})

    return(
        <input type={'date'} id={'date'} {...props.attributes}>
            {props.children}
        </input>
    )
})
export default Date