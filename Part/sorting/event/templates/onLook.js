import gsap from "gsap";
import  {useEffect} from 'react'
export default function onTilt(event){
    useEffect(()=>{

        let left = event.ref.current.getBoundingClientRect().left + window.scrollX
        let top = event.ref.current.getBoundingClientRect().top + window.scrollY

        let width = event.ref.current.clientWidth
        let height = event.ref.current.clientHeight

        let centerX = left + width / 2
        let centerY = top + height / 2

        window.onmousemove = (e)=>{
            let x = centerX - e.pageX
            let y = centerY - e.pageY

            gsap.to(event.ref.current,{
                rotationX:y/20,
                rotationY:-x/20,
                duration:2
            })
        }

    },[])
}