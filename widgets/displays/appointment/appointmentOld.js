"use client";
import React,{useState,useEffect} from 'react'
import part from '@part'
export default function Appointment(props) {
    const [state,setState]= useState([])
    const {socket} = part.socket()
//slots[i].globalTime
    useEffect(()=>{
        if(!socket) return;
        socket.emit('/getSlots',{room:'test'})
        socket.on('responseSlots',(slots)=>{
            let slotsArray = []
            let daysArray = []
            let days = []
            for (let i = 0;i<slots.length;i++){
                let date = new Date(Number(slots[i].globalTime))

                let day = date.getDate()

                if(!days.includes(day)){
                    if(slotsArray.length) daysArray.push(<Day day={days.at(-1)} key={day}>{slotsArray}</Day>)
                    slotsArray = []
                    days.push(day)
                }

                slotsArray.push(<Slot key={i} hours={date.getHours()} minutes={date.getMinutes()}></Slot>)
            }
            if(slotsArray) daysArray.push(<Day day={days.at(-1)} key={'lastDay'}>{slotsArray}</Day>)
            setState(daysArray)
        })

    },[socket])

    return(
        <part.grid center disableMemo w={'100%'} gap={35}>
            {state}
        </part.grid>
    )

}


function Slot({hours,minutes}){
    return (
        <part.grid center bg={'green'} w={150} h={50} br={20}>{`${hours}:${minutes}`}</part.grid>
    )
}

function Day({children,day}){
    return (
        <part.grid center key={'lastDay'} disableMemo bg={'coral'} w={'80%'} maxW={500} minH={70} br={10} templateColumns={'repeat(auto-fit, minmax(200px, 1fr))'}>
            <h1 pos={'a'} top={-12} margin={'auto'}>{day}</h1>
            {children}
        </part.grid>
    )
}