"use client";
import part from '@part'
export default function Button2(props) {
    return(
        <part.button setModal={['auth',true]} padding={25} {...props}>
            Try Fuzzball
        </part.button>
    )
}