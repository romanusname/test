"use client";
import React, {useState, useContext, useEffect} from "react";
import part from '@part'

const createSlot = React.forwardRef((props, ref) => {

    const {formState, dispatch} = part.formContext()


   // const [target,setTarget] = part.modals.target('auth')

    //setVar={['authDir','left']}
    //<part.Input1 id={'globalTime'} type={'name'}></part.Input1>
    return (
        <>
            <part.background setModal={['createSlot',false]} transition={{opacity:0}} zIndex={9999999999999999999} bg={'green'}/>
            <part.modal areas={3} transition={[{y:'100vh'}]} show={'createSlot'}>


                <part.Form1 area={'middle'} submit={'/createSlot'} number={0}>
                    <part.widgets.calendar></part.widgets.calendar>
                    <part.widgets.clock></part.widgets.clock>
                    <part.button margin={5}>создать слот</part.button>
                </part.Form1>

            </part.modal>
        </>
    )
})
export default createSlot