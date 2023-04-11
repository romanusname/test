"use client";
import React, {useContext, useRef} from "react";
import part from "@part";

const Time = React.forwardRef((props, ref) => {

    if(!ref) ref = useRef()
    let name = 'time'
    props = part.propsSorting({props,ref, name})

    return(
        <input type={'time'} id={'time'} {...props.attributes}>
            {props.children}
        </input>
    )
})
export default Time