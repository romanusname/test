"use client";
import React,{useContext,createContext,useState,useReducer} from 'react'
import part from '@part'
export const FormContext = createContext({})

export default function formContext() {
    const {formState, dispatch} = useContext(FormContext)
    return {formState, dispatch}
}


formContext.provider = ({children})=>{

    const date = new Date()
    const initialFormState = {
        date:date,
        time:date.getTime(),
        email:'',
        password:'',
        confirmPassword:'',
    }

    const [formState,dispatch] = useReducer(part.formReducer,initialFormState)

    return(
        <FormContext.Provider value={{formState, dispatch}}>
            {children}
        </FormContext.Provider>
    )
}