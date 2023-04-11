"use client";
import part from '@part'
export default function Slot(props) {
    return(
        <part.grid direction={'row'} alignItems={'center'} justifyItems={'left'} templateColumns={'1fr 1fr 1fr'} height={100}>
            <group>{props.email}</group>
            <group>{props.role}</group>
            <group>business status</group>
        </part.grid>
    )
}