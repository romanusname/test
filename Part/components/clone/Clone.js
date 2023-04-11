"use client";
import part from '@part'
import React, {useContext, useEffect,useRef,useMemo,useCallback,useLayoutEffect,useState} from "react";
const Clone = React.forwardRef((props, ref) => {
    if(!ref) ref = useRef()
    let name = 'clone'

    let targetDefault = props.target??-1

    const [target,setTarget] = useState(targetDefault-1)

    props = part.propsSorting({props,ref, name})

//массив пропсов / распределять по номеру
    let all = []
    for (let i = 0;i<props.many;i++){
        let thisTarget = false
        if(i==target) thisTarget = true

        props.pass = {...props.pass,number:i,target,setTarget,thisTarget}

        let childrenPassProps = part.childrenPassProps(props)
        all.push(childrenPassProps)
    }


    let childrenPassProps = part.childrenPassProps(props)

/*    let all = []
    for (let i = 0;i<props.howMany;i++){
        all.push(childrenPassProps)
    }*/

    return all

})

export default Clone