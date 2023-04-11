import {useEffect,useRef} from 'react'
export default function useUpdate(update,inputs) {

    const firstUpdate = useRef(false);

    useEffect(()=>{
        if (!firstUpdate.current) {
            firstUpdate.current = true;
        } else {
            update()
        }
    },inputs)

}