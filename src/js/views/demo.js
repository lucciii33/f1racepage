import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import F1Car from "../../img/f1.png";
import grey from "../../img/greyBG.jpg";
import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="background position-relative">
			
				<img src={grey} className=''></img>
			
			<div className=" position-absolute bottom-50 end-50">
				<div className="d-flex justify-content-around">

				<div>
					<h1>LOGO</h1>
				</div>
				<div>
					<a className="m-2">shop</a>
					<a className="m-2">Our History</a>
					<a className="m-2">Conacts</a>
					<a className="m-2">News</a>
					<a className="m-2">Other</a>
				</div>
				<div>
					<h2>dddd</h2>
				</div>

				</div>
			 <img src={F1Car} style={{width: "100%", height: '18rem', objectFit: "cover"}}></img>
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
			</div>
		</div>
	);
};
