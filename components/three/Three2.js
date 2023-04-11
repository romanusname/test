"use client";
import gsap from 'gsap'
import React,{useRef,useState,useEffect} from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { useGLTF } from "@react-three/drei";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
//import test from '/static/tes'
export default function Three2(){


    return (
        <Canvas>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Box position={[-1.2, 0, 0]} />
            <Model position={[1.5, 0, 0]}></Model>
        </Canvas>
    )
}




export function Model(props) {
    const { nodes, materials } = useGLTF("/static/test.glb");
    const ref = useRef()
    let tlScale = gsap.timeline({paused:true})
    useEffect(()=>{
        gsap.to(ref.current.rotation,{
            x: "+=1",
            repeat: -1,
            ease: 'none',
            repeatRefresh: true
        })

        tlScale.to(ref.current.scale,{
            x:2
        })

    },[])


    return (
        <group {...props} dispose={null}>
            <mesh onPointerOver={(event) => tlScale.play()} onPointerOut={(event) => tlScale.reverse()} ref={ref} geometry={nodes.Torus.geometry} material={nodes.Torus.material} />
        </group>
    );
}

useGLTF.preload("/static/test.glb");


function Box(props) {
    // This reference gives us direct access to the THREE.Mesh object
    const ref = useRef()

    // Subscribe this component to the render-loop, rotate the mesh every frame
    // useFrame((state, delta) => (ref.current.rotation.x += delta))
    let tlScale = gsap.timeline({paused:true})
    useEffect(()=>{
        gsap.to(ref.current.rotation,{
            x: "+=1",
            repeat: -1,
            ease: 'none',
            repeatRefresh: true
        })

        tlScale.to(ref.current.scale,{
            x:2
        })

      //  console.log(ref.current)
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