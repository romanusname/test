"use client";
import {createContext, useContext, useEffect, useState} from "react";
export const roleContext = createContext({})
export default function role() {
    const {role,setRole} = useContext(roleContext)
    return {role,setRole}
}

role.start = ()=>{
    const {role,setRole} = useContext(roleContext)
    useEffect(()=>{
        console.log('getRole')
    },[])
}

role.provider = ({children})=>{
    const [role,setRole] = useState()
    return (
        <roleContext.Provider value={{role,setRole}}>
            {children}
        </roleContext.Provider>
    )
}