"use client";
import styles from './form.module.scss'
import React, {useRef, useEffect, useState, useMemo,createContext,useReducer,useContext} from "react";
import part from "@part";

const form = React.forwardRef((props, ref) => {
    const {socket} = part.socket()
    if(!ref) ref = useRef()
    let name = 'form'
    props = part.propsSorting({props,ref, name})
    const {formState, dispatch} = part.formContext()
    const [target,setTarget] = part.modals.target(props.target)


    useEffect(()=>{
        // dispatch({type:'reset'})
        return dispatch({type:'reset'})
    },[target])


    let showDefault  = false
    if(props.number == target) showDefault= true

    const [show,setShow]= useState(showDefault)

    useEffect(()=>{
        if(target==props.number){
            setShow(true)
        }
        if(target!=props.number){
            setShow(false)
        }
        console.log(target, props.number)
    },[target])

    function submit(e){
        e.preventDefault()
        console.log(formState)
        socket.emit(props.submit,formState)
    }

    const childrenPassProps = part.childrenPassProps(props)

    if(!props.transition){
        return (
            <form onSubmit={(e)=>submit(e)} className={styles.form} {...props.attributes}>
                {childrenPassProps}
            </form>
        )
    }


    return(
        <part.transition {...props} show={show} passRef={ref}>
                <form onSubmit={(e)=>submit(e)} className={styles.form} {...props.attributes}>
                    {childrenPassProps}
                </form>
        </part.transition>
    )
})
export default form
