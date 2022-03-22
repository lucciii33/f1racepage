import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import F1Car from "../../img/f1.png";
import icon from "../../img/menuicon.png";
import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container1 ">

			<div className="">
				<div className="d-flex justify-content-around">
					<div>
						<div className="dropdown">
							<button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
								<img  src={icon} style={{width: '35px', height: '35px'}}></img>
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
						<button className="btn1">Lest Race</button>
					</div>
				</div>

			</div>
			<br />
			<br />
			<br />
			<div className="d-flex justify-content-center mt-5">
				<img src={F1Car} className=''></img>
			</div>
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
