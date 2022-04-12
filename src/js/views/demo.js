 import React, { useState, useEffect, useContext, useRef, Suspense} from "react";
//  import {Canvas, useFrame} from "@react-three/fiber";
//  import { OrbitControls, useGLTF } from "@react-three/drei";
 import { Link } from "react-router-dom";
 import F1Car from "../../img/prueba.jpeg";
 import icon from "../../img/menuicon.png";
 import { Context } from "../store/appContext";

 import "../../styles/demo.css";
// import { AmbientLight } from "three";
// import { DirectionalLight } from "three";
// import Scene from "../component/Scene";


 export const Demo  = () => {
 	const { store, actions } = useContext(Context);


 	return (
 		<div className="background position-relative ">
			 	<img src={F1Car} className="image"></img>
					 <div className="main position-absolute top-50 start-50 translate-middle">
					 <Link to="/single">
						 <button className="cen btn-danger">fdkfkdkd</button>
					</Link>
					<Link to="/aboutus">
						 <button className="cen btn-danger">fdkfkdkd</button>
					</Link>
						 <p className="cen text-danger"><strong>Ready to shop?</strong></p>
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
