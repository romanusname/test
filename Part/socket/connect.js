"use client";
import {useEffect,useContext,useState} from "react";
import { useRouter } from 'next/navigation';
//import io from "socket.io-client";
let io = require('socket.io-client');
let socket
import part from '@part'


export default function connect() {
    const {setSocket} = part.socket()
    const {role,setRole} = part.role()

    const [auth,setAuth]=part.modals('auth')
    const router = useRouter()

    const alert = part.widgets.alert()

    useEffect(()=>{
        connected()
        console.log('APP')
    },[])

    const connected = async () => {
        await fetch('/api/socketServer')
        socket = io()
        socket.on('connect', () => {
            console.log('connected')
        })



        socket.emit('/permitSetUTCDeviation',()=>{
            const date = new Date()
            socket.emit('/setUTCDeviation', {time:date.getTime()})
           // console.log(date.getUTCHours(),date.getUTCMinutes())
        })


/*        const date = Date.now()
        socket.emit('/setTimezone', {date})

        socket.on('checkTimezone',(data)=>{
            const date = Date.now()
            let difference = Math.round((date - data.date)/(60000*5))
            socket.emit('/writeTimezone', {difference:difference*5})
        })*/

        socket.on('reconnect',()=>{
            reconnect()
        })

        function reconnect() {
            socket.io.engine.close()
        }

        socket.on('alert',(data)=>{
         //   console.log(data.message)
            alert(data.message)
        })

        socket.on('setRole',(role)=>{
            setRole(role)
        })

        socket.on('closeModal',(data)=>{
            if('auth') setAuth(false)
        })

        socket.on('openModal',(data)=>{
            if('auth') setAuth(true)
        })

        socket.on('redirect',(data)=>{
            router.push(data)
        })


        socket.on('getLogin',async(data)=>{
            await fetch('/api/auth/login',{headers: {logintoken:data.logintoken}})
            reconnect()
        })

        setSocket(socket)
    }
}