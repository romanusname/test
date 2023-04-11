"use client";
import React, {useState, useContext, useEffect} from "react";
import part from '@part'

const Auth = React.forwardRef((props, ref) => {

    const [target,setTarget] = part.modals.target('auth')

    //setVar={['authDir','left']}
    return (
        <>
        <part.background setModal={['auth',false]} transition={{opacity:0}} reverseTransition={{opacity:0,onComplete:()=>setTarget(0)}} zIndex={9999999999999999999} bg={'green'}/>
        <part.modal areas={2} templateRows={'1fr 5fr'} transition={[{y:'100vh'}]} show={'auth'}>
            <flex>
                  <part.ButtonForm setTarget={['auth','-1']}>1</part.ButtonForm>
                  <part.ButtonForm setTarget={['auth','+1']}>2</part.ButtonForm>
            </flex>

            <part.switcher>
            <part.Form1 submit={'/register'} number={0}>
                <part.Input1 id={'email'} type={'email'}></part.Input1>
                <part.Input1 id={'password'} type={'password'}></part.Input1>
                <part.Input1 id={'confirmPassword'} type={'password'}></part.Input1>
                <part.button margin={5}>регистрация</part.button>
            </part.Form1>

            <part.Form1 submit={'/login'} number={1}>
                <part.Input1 id={'email'} type={'email'}></part.Input1>
                <part.Input1 id={'password'} type={'password'}></part.Input1>
                <part.button margin={5}>вход</part.button>
            </part.Form1>

                <part.Form1 submit={'/login'} number={2}>
                    <part.button margin={5}>кнопка</part.button>
                </part.Form1>
            </part.switcher>

        </part.modal>
        </>
    )
})
export default Auth