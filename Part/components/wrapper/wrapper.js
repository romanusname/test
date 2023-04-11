import part from '@part'
import {useMemo} from "react";
export default function wrapper(props){
    const childrenPassProps = part.childrenPassProps(props)
 //   const childrenPassProps = useMemo(()=>part.childrenPassProps(props),[])
    return childrenPassProps
}