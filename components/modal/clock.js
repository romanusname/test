"use client";
import part from "@part";
import React, {useContext, useState} from "react";
//{`${date.getHours()}:${date.getMinutes()}`}
export default function clock() {
  //  const [date,setParams]= part.modals.params('clock')
  //  const {formState, dispatch} = useContext(part.formContext)
   // console.log('datE',date.hours)
 //   const date = new Date(params.time)

    //const [hours,setHours] = useState(0)
   // const [minutes,setMinutes] = useState(0)
   // let date = {hours,setHours,minutes,setMinutes}

    return (
        <>
            <part.background setModal={['clock',false]} transition={{opacity:0}} zIndex={9999999999999999999} bg={'green'}/>
            <part.modal disableMemo areas={3} transition={[{y:'100vh'}]} show={'clock'}>


                    {/*{formState.date.getHours()}*/}
                    <part.widgets.range></part.widgets.range>
                    <part.button>сохранить</part.button>

            </part.modal>
        </>
    )
}