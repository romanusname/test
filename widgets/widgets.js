"use client";
import part from '@part'
import Alert from './alert/alert'
import React,{useState,useEffect,createContext,useContext} from 'react'
import { v4 as uuidv4 } from 'uuid';
export const AlertContext = createContext(false);
import scrollBar from './scrollBar/scrollBar'
import calendar from './inputs/calendar/calendar'
import clock from './inputs/clock/clock'
import range from './inputs/range/range'
import slider from './slider/slider'

export default function widgets(){

}


widgets.provider = ({children})=>{
    const [alerts,setAlerts] = useState([])

    function remove(key){
        setAlerts((e)=>{
            let array = []
            for (let i = 0;i<e.length;i++){
                if(e[i].key!=key) array.push(e[i])
            }
            return array
        })
    }

    function alert(message){
        let key = uuidv4()
        setAlerts((e)=>[...e,<Alert key={key} remove={()=>remove(key)} message={message}/>])
    }

    useEffect(()=>{
    //   console.log(alerts)
    },[alerts])

    return(
        <AlertContext.Provider value={alert}>
            {/*<part.group bottom={10} left={20} pos={'a'} zIndex={9999999999} disableMemo>*/}
                {alerts}
            {/*</part.group>*/}
            {children}
        </AlertContext.Provider>
    )
}


widgets.alert = ()=>{
    const alert = useContext(AlertContext)
    return alert
}

widgets.scrollBar = scrollBar

widgets.calendar = calendar
widgets.clock = clock
widgets.range = range
widgets.slider = slider