"use client";
import part from '@part'
export default function ButtonForm(props){
    //const [target,setTarget] = part.modals.target('auth')
    //width={'80%'} maxWidth={'130px'} margin={10}
    //onClick={()=>setTarget(props.setTarget)}
    return(
        <part.button fontSize={'1em'} {...props}>{props.children}</part.button>
    )
}