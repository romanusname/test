import gsap from "gsap";
import  {useEffect} from 'react'
export default function onTilt(event){
    useEffect(()=>{

            // let f = props.events.pressure
            event.ref.current.onmousemove = (e)=>{
                let x = (event.ref.current.clientWidth / 2) - e.offsetX
                let y = (event.ref.current.clientHeight / 2) - e.offsetY
                gsap.to(event.ref.current,{
                    rotationX:y/10,
                    rotationY:-x/10
                })
            }


            event.ref.current.onmouseleave = ()=> {
                gsap.to(event.ref.current, {
                    rotationX: 0,
                    rotationY: 0
                })
            }


    },[])
}