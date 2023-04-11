"use client";
import part from '@part'
import gsap from 'gsap'
import {v4 as uuidv4} from "uuid";
import React,{useRef,useEffect,useState} from 'react'
export default function slider() {
    //pass={{display:'inline-block',verticalAlign:'bottom'}} whiteSpace={'nowrap'} area={'middle'} h={300} w={'200%'}
    const slideList = useRef()
    const [slides,setSlides] = useState([<Slide key={uuidv4()}/>])
    const [target,setTarget] = useState(0)
    const [tl] = useState(gsap.timeline({paused:true}))


    useEffect(()=>{
        /*gsap.set(slideList.current,{
            x:-500
        })*/

        /*tl.to(slideList.current,{
            x:-1000
        })*/
    },[])

    useEffect(()=>{
        gsap.to(slideList.current,{
            x:target*-500
        })
    },[target])

    function left(){
        setTarget((c)=>c-1)
        setSlides((c)=>{
           // let ee = e
            c.pop()
            return c
        })
    }

    function right(){
        setTarget((c)=>c+1)
        setSlides((c)=>{
            c.push(<Slide key={uuidv4()}/>)
            return c
        })
    }

//overflow={'hidden'}
    //pass={{display:'inline-block',verticalAlign:'bottom'}}
    /*<Slide target={target} number={0}></Slide>
    <Slide target={target} number={1}></Slide>
    <Slide target={target} number={2}></Slide>*/

    return(
        <part.flex disableMemo={true} area={'middle'} w={500} h={300} placeSelf={'center'}>
            <flex>
                <part.button onClick={left}>left</part.button>
                <part.button onClick={right}>right</part.button>
            </flex>

           <part.group disableMemo={true} ref={slideList} whiteSpace={'nowrap'} size={'100%'}>
               {slides}
           </part.group>
        </part.flex>
    )
}


function Slide({number,target}){
    const ref = useRef()
    const [tl] = useState(gsap.timeline({paused:true}))
    //if(number==target)console.log(number)

/*    useEffect(()=>{
      //  const tl = gsap.timeline({paused:true})
        tl.from(ref.current,{
            y:50
        })
    },[])

    useEffect(()=>{
        if(number==target) tl.play()
        if(number!=target) tl.reverse()
    },[target])*/

    return(
        <part.group ref={ref} display={'inline-block'} verticalAlign={'bottom'} bg={'red'} size={'100%'} br={200}>
            {target}
        </part.group>
    )
}


/*
return(

    <part.flex area={'middle'} w={500} h={300} placeSelf={'center'} overflow={'hidden'}>
        <flex>
            <part.button onClick={left}>left</part.button>
            <part.button onClick={right}>right</part.button>
        </flex>

        <part.group ref={slideList} whiteSpace={'nowrap'} size={'100%'} pass={{display:'inline-block',verticalAlign:'bottom'}}>
            <part.group bg={'red'} size={'100%'} br={200}></part.group>
        </part.group>
    </part.flex>

)*/
