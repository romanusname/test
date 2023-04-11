"use client";
import React,{useContext,createContext,useState} from 'react'
export const StyleContext = createContext({})
export default function styleContext({children}){
    const [stylesState,setStylesState] = useState({})
    return(
        <StyleContext.Provider value={{stylesState,setStylesState}}>
            {children}
        </StyleContext.Provider>
    )
}