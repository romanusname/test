"use client";
import part from '@part'
import gsap from 'gsap'
import {Draggable} from "gsap/Draggable";
import {useRef,useEffect} from 'react'
export default function scrollBar({children}) {
    const {smoother} = part.scrollSmoother()
    const circleRef= useRef()
    const scrollBarRef= useRef()

    useEffect(()=>{
        gsap.registerPlugin(Draggable)
    },[])

    useEffect(()=>{

        if(!smoother) return;

        let scrollTween = gsap.to(circleRef.current, {
            y:scrollBarRef.current.clientHeight - 30,
            ease: "none",
            scrollTrigger: {
                start: 0,
                end:'max',
                scrub: true,
                markers:true
            }
        });


        Draggable.create(circleRef.current, {
            type: "y",
            bounds: scrollBarRef.current,
            inertia: true,
            onPress() {
                scrollTween.scrollTrigger.disable(false);
            },
            onDrag() {
                let progress = gsap.utils.normalize(this.minY, this.maxY, this.y);
                console.log(progress)
                let to = smoother.scrollTrigger.end * progress;
                smoother.scrollTo(to);
            },
            onRelease() {
                let progress = gsap.utils.normalize(this.minY, this.maxY, this.y);
                scrollTween.scrollTrigger.enable();
                scrollTween.progress(progress);
            }
        });

    },[smoother])



//stMain={{y:'80vh'}}
    return(
        <part.group ref={scrollBarRef} h={'80vh'} w={'30px'} bg={'red'} br={'20px'} pos={'a'} right={10} top={0} bottom={0} margin={'auto'} zIndex={99999999999}>
            <part.group ref={circleRef} size={30} bg={'coral'} br={30}></part.group>
        </part.group>
    )
}