"use client";
import part from "@part";

export default function Button1(props){

    return(
        <part.button onModal={['auth',true]} hover={{y:-15}} width={'150px'} height={'50px'} br={'20px'} fontSize={'1.5em'} gridColumns={'1fr 1fr'} paddingX={'20px'} props={props}>
            button
            <part.svg position={'relative'} src={'star'} size={25}/>
        </part.button>
    )
}

// либо svg абсолютная позиция

//либо 2 колонки и паддинги с 2 сторон