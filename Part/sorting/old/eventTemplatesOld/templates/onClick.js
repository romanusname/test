import gsap from "gsap";
import  {useEffect} from 'react'
export default function hover({eventsTemplate, ref, name}){
    useEffect(()=>{
       // if(eventsTemplate.click){
            ref.current.onclick = ()=> gsap.to(ref.current,eventsTemplate.onClick)
      //  }
    },[])
}