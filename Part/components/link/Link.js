"use client";
import Link from 'next/link'
import { useRouter } from 'next/navigation';
//import part from "@part";
import React, {useRef} from "react";
import part from "@part";
const Links = React.forwardRef((props, ref) => {
    if(!ref) ref = useRef()
    const router = useRouter()
    const {role,setRole} = part.role()
    let name = 'link'
    props = part.propsSorting({props,ref, name})
    const childrenPassProps = part.childrenPassProps(props)

    function push(){
       if(!props.minAccess || role==props.minAccess) router.push(props.href)
    }

    return(
        <div type="button" onClick={push}>123</div>
    )
})
export default Links

//<div onClick={()=>router.push(props.href)}>{childrenPassProps}</div>
//<Link href={props.href}>{childrenPassProps}</Link>
//<Link href={href}>{children}</Link>