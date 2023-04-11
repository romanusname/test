export default {
    modalNames:['auth','test','message','createRoom','createSlot','clock','calendar']
}


import Auth from '@components/modal/auth'
import CreateRoom from '@components/modal/createRoom'
import CreateSlot from '@components/modal/createStol'
import Clock from '@components/modal/clock'
import Calendar from '@components/modal/calendar'
import Message from '@components/modal/message'
export function Modal(){
    return(
        <>
            <Auth/>
            <CreateRoom/>
            <CreateSlot/>
            <Clock/>
            <Calendar/>
            {/*<Message/>*/}
        </>
    )
}

// может узнавать названия типов "auth,clock" и создавать автоматически массив?