"use client";
import {createContext, useContext, useState} from "react";
export const SocketContext = createContext(false);
import connect from './connect'
import provider from "./provider";

export default function socket() {
    const { socket,setSocket } = useContext(SocketContext)
    return { socket,setSocket }
}

socket.provider = provider
socket.connect = connect