"use client";
import React,{useMemo,useCallback} from 'react'
import part from "@part";

export default function childrenPassProps(props,areaIndex,name) {
   // if(typeof window === 'undefined') return <div/>;
/*
    if (child.type=='flex') {
        return React.cloneElement(<part.flex/>, {...props.pass,...child.props})
    }*/
    let section = -1

    function getComponent(type){
        section++
        if(type=='section') return <part.section section={section}/>
        if(type=='flex') return <part.flex/>
        if(type=='group') return <part.group/>
        if(type=='grid') return <part.grid/>
        if(type=='button') return <part.button/>
        if(type=='p') return <part.p/>
        if(type=='h1') return <part.h1/>
        if(type=='h2') return <part.h2/>
        if(type=='image') return <part.image/>
        if(type=='img') return <part.img/>
        if(type=='svg') return <part.svg/>
        if(type=='navigator') return <part.navigator/>
        if(type=='link') return <part.link/>
        if(type=='background') return <part.background/>
        if(type=='backgroundCanvas') return <part.backgroundCanvas/>
        if(type=='canvas') return <part.canvas/>
        if(type=='pass') return <part.pass/>
        if(type=='columns') return <part.columns/>
        if(type=='compound') return <part.compound/>
        if(type=='form') return <part.form/>
        if(type=='input') return <part.input/>
        if(type=='date') return <part.date/>
        if(type=='time') return <part.time/>
        if(type=='label') return <part.label/>
        if(type=='switcher') return <part.switcher/>
        if(type=='light') return <part.light/>
        if(type=='table') return <part.table/>
        if(type=='th') return <part.th/>
        if(type=='td') return <part.td/>
        if(type=='tr') return <part.tr/>
        if(type=='thead') return <part.thead/>
        if(type=='tbody') return <part.tbody/>
        if(type=='horizontal') return <part.horizontal/>
    }


    return  React.Children.map(props.children, child => {
        try {
            if(props.disableMemo) return React.cloneElement(getComponent(child.type), {...props.pass, ...child.props})
            return useMemo(()=>React.cloneElement(getComponent(child.type), {...props.pass, ...child.props}),[])
        }catch {
            if (React.isValidElement(child)) {
                return React.cloneElement(child, {...props.pass, ...child.props})
            }
            return child;
          //  return React.cloneElement(child, {...props.pass, ...child.props})
        }
    });

}

