import gsap from "gsap";
import part from "@part";
import {useEffect} from "react";
import scrollResponsive from "../scrollResponsive";
import responsiveConfig from "@config/responsive.config";
export default function onMobile(event) {

    useEffect(()=>{
        let mm = gsap.matchMedia();

        mm.add(responsiveConfig.mobile, () => {
            gsap.set(event.ref.current,event.vars[0])
        });
    },[])


}