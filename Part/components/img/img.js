"use client";
import Image from 'next/image'
import React, {useRef} from "react";
import part from "@part";

const img = React.forwardRef((props, ref) => {
    //  console.log(props) // direction вырезается, а не хотелось бы
    if(!ref) ref = useRef()
    let name = 'img'
    let src = props.src
    props = part.propsSorting({props,ref, name})


    if(!props.style.width) props.style.width = 'auto'
    if(!props.style.height) props.style.height = 'auto'

    return (
        <img
            alt="Picture of the author"
            src={props.src}
            {...props.attributes}
        />
    )
})

export default img