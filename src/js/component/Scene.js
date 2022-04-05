/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: the_86_guy (https://sketchfab.com/the_86_guy)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/brake-disk-sport-carbon-ceramic-89de11361d504f479e5cb2df427699ab
title: Brake Disk Sport Carbon Ceramic
*/

import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import {OrbitControls, useGLTF } from '@react-three/drei'

export default function Scene({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/scene.gltf')
  const SceneTest = new Scene({...props})
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 0, -30.37]} scale={101.07}>
            <mesh geometry={nodes.Rotor_Sport_brake_disk_1_0.geometry} material={materials.Sport_brake_disk_1} />
            <mesh geometry={nodes.Rotor_Sport_brake_disk_1_0_1.geometry} material={materials.Sport_brake_disk_1} />
            <mesh geometry={nodes.Rotor_Sport_brake_hub_1_0.geometry} material={materials.Sport_brake_hub_1} />
            <mesh geometry={nodes.Rotor_Bolts_0.geometry} material={materials.Bolts} />
          </group>
          <group position={[1.97, 181.63, -34.58]} scale={47.77}>
            <mesh geometry={nodes.Caliper_Sport_brake_caliper_0.geometry} material={materials.Sport_brake_caliper} />
            <mesh geometry={nodes.Caliper_Logo_0.geometry} material={materials.Logo} />
            <mesh geometry={nodes.Caliper_Bolts_0.geometry} material={materials.Bolts} />
            <mesh geometry={nodes.Caliper_Brake_pads_0.geometry} material={materials.Brake_pads} />
            <mesh geometry={nodes.Caliper_Brake_pads_compounds_0.geometry} material={materials.Brake_pads_compounds} />
          </group>
        </group>
      </group>
      <Canvas className="canvas">
                    <Suspense fallback={null}>
                         <SceneTest/> 
                    </Suspense>

                    {/* <OrbitControls enableZoom={false}></OrbitControls>
                    <AmbientLight intensity={0.5}></AmbientLight>
                    <DirectionalLight position={[-2,5,2]} intensity={1}></DirectionalLight> */}
                </Canvas> 
    </group>
    
  )
}

useGLTF.preload('/scene.gltf')
