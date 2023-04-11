import gsap from "gsap";
import  {useEffect} from 'react'
export default function onYoyo({eventsTemplate, ref, name}){

    let tl = gsap.timeline({yoyo: true, ease: "none", repeat: -1})
    let vars = []
    if(typeof eventsTemplate.onYoyo == "object") vars = [eventsTemplate.onYoyo]
    if(Array.isArray(eventsTemplate.onYoyo))  vars = eventsTemplate.onYoyo

    useEffect(()=>{

        setTimeout( ()=> {
                for (let i in vars) {

                    let pos = i * 0.5
                    if(vars[i].pos) pos = vars[i].pos
                    delete vars[i].pos

                    tl.to(ref.current, vars[i],pos)
                }
            }
            ,200)

    },[])
}

