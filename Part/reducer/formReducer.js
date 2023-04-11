"use client";
import {createContext} from "react";

export default function(state, action) {
    switch (action.type){

        case 'setDay':
            return {
                ...state,
                date:new Date(state.date.setDate(action.payload)),
                time:state.date.getTime(),
            }

        case 'setHours':
            return {
                ...state,
                date:new Date(state.date.setHours(action.payload)),
                time:state.date.getTime(),
            }

        case 'setMinutes':
            return {
                ...state,
                date:new Date(state.date.setMinutes(action.payload)),
                time:state.date.getTime(),
            }

        case 'setemail':
            return {
                ...state,
                email:action.payload,
            }

        case 'setpassword':
            return {
                ...state,
                password:action.payload,
            }

        case 'setconfirmPassword':
            return {
                ...state,
                confirmPassword:action.payload,
            }

        case 'reset':
            return {
                ...state,
                date:new Date(),
                email:'',
                password:'',
                confirmPassword: ''
            }

        default:
            return state
    }
}


//export const FormContext = createContext({})