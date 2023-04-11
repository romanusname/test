"use client";
import templates from './index'
export default function addEventListener(event) {
    try {
        templates[event.name](event)
    }catch{
        console.log('Event Template не существует')
    }
}