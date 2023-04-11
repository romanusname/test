"use client";
import part from '@part'
import React,{useState,useEffect,useRef} from 'react'
export default function DateWidget(props) {
   // const [date,setDate] = useState(props.state.date)
  //  const date = props.formState.date
   // const [modal,setModal] = useState(false)
    const {formState, dispatch} = part.formContext()


    const monthNames = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
        "Июль", "Август", "Сентябль", "Окрябрь", "Ноябрь", "Декабрь"
    ]


    return(
        <>
        <part.group setModal={['calendar',true]}>{formState.date.getDate()}:{formState.date.getMonth()+1}:{formState.date.getFullYear()}</part.group>
{/*        <part.modal templateRows={'1fr 5fr'} show={modal} transition={{opacity:0}} bg={'white'} w={150} h={150} top={100} pos={'a'}>
            <flex>
                left {monthNames[date.getMonth()]} right
            </flex>

            <grid gap={3} templateColumns={'repeat(7,1fr)'} templateRows={'repeat(6,1fr)'}>
                <clone many={31} target={date.getDate()}>
                    <DaySlot date={date} dispatch={props.dispatch}></DaySlot>
                </clone>
            </grid>
        </part.modal>*/}
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

// это календарь а не дата