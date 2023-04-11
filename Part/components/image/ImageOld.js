"use client";
import Image from 'next/image'
export default function Images({src,direction='horizontal',width,height,size='100%',position='relative'}){

    if(size){
        if(direction=='horizontal') height = size
        if(direction=='vertical') width = size
    }

    if(!width) width = 'auto'
    if(!height) height = 'auto'

    return (
        <Image
            src={src}
            alt="Picture of the author"
            width="0"
            height="0"
            sizes="100vh"
            style={{ width, height,position:position,zIndex:1}}
            priority
        />
    )
}