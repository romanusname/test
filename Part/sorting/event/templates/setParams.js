"use client";
import  {useEffect} from 'react'
import part from "@part";
export default function setParams(event) {
    const [params,setParams]= part.modals.params(event.vars[0])

    useEffect(()=>{
       // if(!event.ref.current) return;
      //  event.ref.current.addEventListener('click', () => {
            setParams(event.vars[1])
        })
  //  },[])
}