"use client";
import Image from 'next/image'
import React from "react";
import part from "@part";

const image = React.forwardRef((props, ref) => {
    let name = 'image'
    props = part.propsSorting({props,ref, name})


        if(!props.style.width) props.style.width = 'auto'
        if(!props.style.height) props.style.height = 'auto'

    return (
        <Image
            alt="Picture of the author"
            width="0"
            height="0"
            sizes="100vh"
            src={props.src}
            {...props.attributes}
            priority
        />
    )
})

export default image