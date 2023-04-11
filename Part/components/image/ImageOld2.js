"use client";
import Image from 'next/image'
import React from "react";
import part from "@part";

const imageOld2 = React.forwardRef((props, ref) => {
  //  console.log(props) // direction вырезается, а не хотелось бы
    let name = 'image'
    let src = props.src
    props = part.propsSorting({props,ref, name})


        if(!props.style.width) props.style.width = 'auto'
        if(!props.style.height) props.style.height = 'auto'

    return (
        <Image
            src={src}
            alt="Picture of the author"
            width="0"
            height="0"
            sizes="100vh"
            style={{ ...props.style,zIndex:1}}
            priority
        />
    )
})

export default imageOld2