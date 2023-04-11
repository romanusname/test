import gsap from "gsap";
import  {useEffect} from 'react'
export default function hover({eventsTemplate, ref, name}){
    useEffect(()=>{
        if(eventsTemplate.pressure){
            // let f = props.events.pressure
            ref.current.onmousemove = (e)=>{
                let x = (ref.current.clientWidth / 2) - e.offsetX
                let y = (ref.current.clientHeight / 2) - e.offsetY
                gsap.to(ref.current,{
                    rotationX:y/10,
                    rotationY:-x/10
                })
            }


            ref.current.onmouseleave = ()=> {
                gsap.to(ref.current, {
                    rotationX: 0,
                    rotationY: 0
                })
            }

/*            ref.current.onmouseenter = ()=>{
                if(typeof (eventsTemplate.pressure)== "function") eventsTemplate.pressure({type:'mouseEnter'})
            }*/

/*            ref.current.onmouseleave = ()=> {
                gsap.to(ref.current, {
                    rotationX: 0,
                    rotationY: 0
                })
                if(typeof (eventsTemplate.pressure)== "function")  eventsTemplate.pressure({type:'mouseLeave'})
            }*/
            //  delete eventsTemplate.pressure
        }
    },[])
}