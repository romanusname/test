"use client";
import part from "@part";
import React, {useContext, useState} from "react";

export default function calendar() {

    const {formState, dispatch} = part.formContext()
    const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
        "Июль", "Август", "Сентябль", "Окрябрь", "Ноябрь", "Декабрь"
    ]

    return (
        <>
            <part.background setModal={['calendar',false]} transition={{opacity:0}} zIndex={9999999999999999999} bg={'blue'}/>
            <part.modal templateRows={'1fr 5fr'} show={'calendar'} transition={{opacity:0}} bg={'white'} w={400} h={400} top={100} pos={'a'}>
                <flex>
                    left {monthNames[formState.date.getMonth()]} right
                </flex>

                <grid gap={3} templateColumns={'repeat(7,1fr)'} templateRows={'repeat(6,1fr)'}>
                    <clone many={31} target={formState.date.getDate()}>
                        <DaySlot date={formState.date} dispatch={dispatch}></DaySlot>
                    </clone>
                </grid>
            </part.modal>
        </>
    )
}


function DaySlot({number,setTarget,thisTarget,dispatch}) {

    function reDate(){
        setTarget(number)
        dispatch({type:'setDay',payload:number+1})
    }
    return <part.group onClick={reDate} cursor={'default'} onHover={{boxShadow: 'inset 0px 0px 0px 3px orange'}} if={[thisTarget,{bg:'green'}]} size={'100%'}>{number+1}</part.group>
}