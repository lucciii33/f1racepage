 import React, { useState, useEffect, useContext, useRef, Suspense} from "react";
 import {Canvas, useFrame} from "@react-three/fiber";
 import { OrbitControls, useGLTF } from "@react-three/drei";
 import { Link } from "react-router-dom";
 import F1Car from "../../img/f1.png";
 import icon from "../../img/menuicon.png";
 import { Context } from "../store/appContext";

 import "../../styles/demo.css";
import { AmbientLight } from "three";
import { DirectionalLight } from "three";
import Scene from "../component/Scene";


 export const Demo  = () => {
 	const { store, actions } = useContext(Context);


 	return (
 		<div className="container1 ">

 				{/* <div className="d-flex justify-content-around">
 			<div className="">
				<div>
						<div className="dropdown">
							<button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
								<img src={icon} style={{ width: '40px', height: '35px' }}></img>
 								<span class="caret"></span>
 							</button>
 							<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
 								<li><a className="dropdown-item" href="#">Action</a></li>
 								<li><a className="dropdown-item" href="#">Another action</a></li>
 								<li><a className="dropdown-item" href="#">Something else here</a></li>
 							</ul>
 						</div>
 					</div>
					<div>
 						<a className="let m-2">shop</a>
 						<a className="let m-2">Our History</a>
 						<a className="let m-2">Conacts</a>
 						<a className="let m-2">News</a>
 						<a className="let m-2">Other</a>
 					</div>
 					<div>
 						<button className="btn">Lest Race</button>
 					</div>
 				</div>

 			</div>
 			<br />
 			<br />
 			<br />
 			<div className="d-flex justify-content-center mt-5">
 				<img src={F1Car} className=''></img>
 			</div>
 			<div className="position-relative">


 			<ul class="position-absolute top-50 start-0 translate-middle-y nav flex-column">
 				<li class="nav-item">
 					<a class="nav-link active" aria-current="page" href="#">Active</a>
 				</li>
 				<li class="nav-item">
 					<a class="nav-link" href="#">Link</a>
 				</li>
 				<li class="nav-item">
 					<a class="nav-link" href="#">Link</a>
 				</li>
 				<li class="nav-item">
 					<a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
 				</li>
 			</ul>
 			</div> */}
             
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
