import part from "@part";
import {useEffect} from "react";
import gsap from "gsap";
import responsiveConfig from "@config/responsive.config";

export default function scrollResponsive(event) {
  //  const {responsive, setResponsive} = part.responsive.context()

 //   useEffect(()=>{
 //   if (responsive == 'mobile') return;
  //  console.log('TEST')
   // if(!event.ref || !event.trigger) return;
  //  if(event.responsive == 'mobile') return;  // horisontal это не onPin

        if(!event.allow && !event.disable){
            gsap.to(event.ref.current, {
                ...event.vars[0],
                scrollTrigger: {
                    trigger: event.trigger.current,
                    ...event.scrollVars,
                    ...event.start,
                    ...event.end,
                    markers:true
                }
            })
        }

        if(event.allow){
            let mm = gsap.matchMedia();
            for (const key in responsiveConfig) {
                if (event.allow.includes(key)) {
                    mm.add(responsiveConfig[key], () => {
                        gsap.to(event.ref.current, {
                            ...event.vars[0],
                            //  ease:'none',
                            scrollTrigger: {
                                trigger: event.trigger.current,
                                ...event.scrollVars,
                                ...event.start,
                                ...event.end,
                            }
                        })
                    });
                }
            }
            return () => mm.revert();
        }

    if(event.disable){
        let mm = gsap.matchMedia();
        for (const key in responsiveConfig) {
            if (!event.disable.includes(key)) {
                console.log('ADD SCROLL TRIGGER')
                mm.add(responsiveConfig[key], () => {
                    gsap.to(event.ref.current, {
                        ...event.vars[0],
                        scrollTrigger: {
                            trigger: event.trigger.current,
                            ...event.scrollVars,
                            ...event.start,
                            ...event.end,
                        }
                    })
                });
            }
        }
        return () => mm.revert();
    }

  //  },[])


/*
    if(!event.allow && !event.disable){
        useEffect(() => {
            let mm = gsap.matchMedia();

            mm.add('(min-width: 701px)', () => {
                if (responsive == 'mobile') return;
                gsap.to(event.ref.current, {
                    ...event.vars[0],
                    scrollTrigger: {
                        trigger: event.ref.current,
                        ...event.scrollVars,
                        ...event.start,
                        ...event.end,
                    }
                })
            });

            return () => mm.revert();
        }, [responsive]);
    }






    useEffect(() => {
        let mm = gsap.matchMedia();

        if(event.allow){
            for (const key in responsiveConfig) {
               // console.log('ALLOW',event.allow[0],key)
                    if(event.allow.includes(key)){
                        console.log('ALLOW',responsiveConfig[key])
                        mm.add(responsiveConfig[key], () => {
                            if (responsive == 'mobile') return;
                            gsap.to(event.ref.current, {
                                ...event.vars[0],
                              //  ease:'none',
                                scrollTrigger: {
                                    trigger: event.ref.current,
                                    ...event.scrollVars,
                                    ...event.start,
                                    ...event.end,
                                }
                            })
                        });
                    }
            }
        }

        return () => mm.revert();
    }, [responsive]);


    */

}