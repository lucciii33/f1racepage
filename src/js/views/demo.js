 import React, { useState, useEffect, useContext, useRef, Suspense} from "react";
//  import {Canvas, useFrame} from "@react-three/fiber";
//  import { OrbitControls, useGLTF } from "@react-three/drei";
 import { Link } from "react-router-dom";
 import F1Car from "../../img/new.png";
 import icon from "../../img/menuicon.png";
 import { Context } from "../store/appContext";
 import "../../styles/demo.css";

 import "../../styles/demo.css";
// import { AmbientLight } from "three";
// import { DirectionalLight } from "three";
// import Scene from "../component/Scene";


 export const Demo  = () => {
 	const { store, actions } = useContext(Context);


 	return (
 		<div className="">
			 	
					<div className=" d-flex justify-content-center align-items-center mt-2 row">
						
						<div className="mainpagearrow ms-5">
							<div className="bgarrow position-relative me-4">
							<i className="fas fa-arrow-left position-absolute top-50 start-50 translate-middle"></i>
							</div>
						
						</div>
						<img className=""src={F1Car} style={{width:'800px', height: "auto", marginTop: '35px'}}></img>
						<div className="bgarrowblue m-3">
					</div>
					
					</div>
					<div className="d-flex justify-content-center align-items-center mb-3">
					 <Link to="/single">
						 <button className="button-24 m-1">Shop here now</button>
					</Link>
					<Link to="/f1trans">
						 <button className="button-24 m-1">learn more about F1</button>
					</Link>
					</div>
						 

 			
             
                 {/* <Canvas className="canvas">
                    <Suspense fallback={null}>
                        <Scene/>
                    </Suspense>

                    <OrbitControls enableZoom={false}></OrbitControls>
                    <AmbientLight intensity={0.5}></AmbientLight>
                    <DirectionalLight position={[-2,5,2]} intensity={1}></DirectionalLight>
                </Canvas>  */}
            
 		</div>
 	);
 };
