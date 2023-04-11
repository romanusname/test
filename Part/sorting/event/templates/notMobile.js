import gsap from "gsap";
import part from "@part";
import {useEffect} from "react";
import scrollResponsive from "../scrollResponsive";
import responsiveConfig from "@config/responsive.config";
export default function notMobile(event) {

    useEffect(()=>{
        let mm = gsap.matchMedia();

        mm.add(responsiveConfig.computer, () => {
            gsap.set(event.ref.current,event.vars[0])
        });

        mm.add(responsiveConfig.middle, () => {
            gsap.set(event.ref.current,event.vars[0])
        });
    },[])


}