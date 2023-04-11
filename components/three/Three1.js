"use client";
import gsap from 'gsap'
import React,{useRef,useState,useEffect} from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
export default function Three1(){


    return (
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Box position={[-1.2, 0, 0]} />
            <Box position={[1.2, 0, 0]} />
        </Canvas>
    )
}



function Box(props) {
    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef()

    // Subscribe this component to the render-loop, rotate the mesh every frame
   // useFrame((state, delta) => (ref.current.rotation.x += delta))
    console.log('NewTl')
    let tlScale = gsap.timeline({paused:true})
    useEffect(()=>{
        gsap.to(ref.current.rotation,{
            x: "+=1",
            repeat: -1,
            ease: 'none',
            repeatRefresh: true,
        })

        tlScale.to(ref.current.scale,{
            x:2
        })

        console.log(ref.current)
    },[])




    return (
        <mesh
            {...props}
            ref={ref}
            scale={1}
            onPointerOver={(event) => tlScale.play()}
            onPointerOut={(event) => tlScale.reverse()}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={'hotpink'} />
        </mesh>
    )
}