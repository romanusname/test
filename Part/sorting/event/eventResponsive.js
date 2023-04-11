import gsap from "gsap";
import responsiveConfig from "@config/responsive.config";
//event,type,tltype
export default function eventResponsive(event,type,tlMethod){
    const func = ()=> event.globalTimeline[tlMethod]()
    let mm = gsap.matchMedia();
    let listening = false

    if(!event.allow && !event.disable){
        event.ref.current.addEventListener(type, func);
    }

    if(event.allow){
        for (const key in responsiveConfig) {
            mm.add(responsiveConfig[key], () => {
                if(event.allow.includes(key) && !listening) {event.ref.current.addEventListener(type, func);listening=true}
                if(!event.allow.includes(key)) {event.ref.current.removeEventListener(type, func);listening=false}
            });
        }
    }

    if(event.disable){
        for (const key in responsiveConfig) {
            mm.add(responsiveConfig[key], () => {
                if(!event.disable.includes(key) && !listening) {event.ref.current.addEventListener(type, func);listening=true}
                if(event.disable.includes(key)) {event.ref.current.removeEventListener(type, func);listening=false}
            });
        }
    }

}