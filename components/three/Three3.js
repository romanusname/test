"use client";
import gsap from 'gsap'
import React,{useRef,useState,useEffect} from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useLoader } from '@react-three/fiber'
import { useGLTF } from "@react-three/drei";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
//import test from '/static/tes'
export default function Three3(){


    return (
        <Canvas camera={{ fov: 75, position: [0, 30, 15]}}>
            <ambientLight />
            <pointLight position={[10, 10, 10]} />
            <Model position={[1, 0, 0]}></Model>
        </Canvas>
    )
}



export function Model(props) {

    useEffect(()=>{
        gsap.to(ref.current.rotation,{
            y: "+=1",
            repeat: -1,
            ease: 'none',
            repeatRefresh: true
        })

        //  console.log(ref.current)
    },[])

    const ref = useRef()
    const { nodes, materials } = useGLTF("/static/car.glb");
    return (
        <group ref={ref} {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube.geometry}
                material={materials.Material}
                scale={[5.22, 1, 2.16]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Torus.geometry}
                material={nodes.Torus.material}
                position={[-3.55, -0.93, 2.32]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.7}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Torus001.geometry}
                material={nodes.Torus001.material}
                position={[-3.55, -0.93, -2.34]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.7}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Torus002.geometry}
                material={nodes.Torus002.material}
                position={[3.19, -0.93, -2.34]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.7}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Torus003.geometry}
                material={nodes.Torus003.material}
                position={[3.19, -0.93, 2.32]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={0.7}
            />
        </group>
    );
}

useGLTF.preload("/static/car.glb");