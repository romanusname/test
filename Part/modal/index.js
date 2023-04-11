"use client";
import React,{useState,createContext,useContext} from 'react'
import modalConfig,{Modal} from '@config/modal.config'

const Context = createContext(true)

export default function modals(name){
    let context = useContext(Context);
    return [context[name], context[`set${name}`]]
}


modals.provider = ({children})=>{
    let value = {}
    let modalNames = modalConfig.modalNames

    for (const i in modalNames) {
        const [state, setState] = useState(false)
        value[modalNames[i]] = state
        value[`set${modalNames[i]}`] = setState

        const [target, setTarget] = useState(0)
        value[`${modalNames[i]}Target`] = target
        value[`set${modalNames[i]}Target`] = setTarget

        const [params, setParams] = useState({})
        value[`${modalNames[i]}Params`] = params
        value[`set${modalNames[i]}Params`] = setParams
    }


    return(
        <Context.Provider value={value}>
            <Modal/>
            {children}
        </Context.Provider>
    )
}


modals.control = (name)=>{
    let context = useContext(Context);
    return [context[name], context[`set${name}`]]
}

modals.target = (name)=>{
    let context = useContext(Context);
    return [context[`${name}Target`], context[`set${name}Target`]]
}

modals.params = (name)=>{
    let context = useContext(Context);
    return [context[`${name}Params`], context[`set${name}Params`]]
}

modals.context = Context
//modals.control = control
//modals.target = target