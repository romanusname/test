"use client";
import React, {useState, useContext, useEffect} from "react";
import part from '@part'

const createRoom = React.forwardRef((props, ref) => {

    const [target,setTarget] = part.modals.target('auth')

    //setVar={['authDir','left']}
    return (
        <>
            <part.background setModal={['createRoom',false]} transition={{opacity:0}} zIndex={9999999999999999999} bg={'green'}/>
            <part.modal areas={3} transition={[{y:'100vh'}]} show={'createRoom'}>


                    <part.Form1 area={'middle'} submit={'/createRoom'} number={0}>
                        <part.Input1 id={'name'} type={'name'}></part.Input1>
                        <part.button margin={5}>создать</part.button>
                    </part.Form1>

            </part.modal>
        </>
    )
})
export default createRoom