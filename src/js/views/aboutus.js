import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card } from "../component/card";
import shop from "../../img/shop1.webp";
import F1Car from "../../img/prueba.jpeg";
import about from "../../img/about1.jpg"

export const AboutUs = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="position-relative">
				<div className="position-absolute top-50 start-0 translate-middle-y text-center me-2">
					<h1>Maiele Racing</h1>
					<h3>Lorem ipsum lorem ipsum in 2022</h3>
					<h5>Lorem ipsum is placeholder text commonly used in the graphic.</h5>
					<p className="m-4">for all those fans rigth there, also you have a lot information about f1 like races, times, tracks etc</p>
					<button className="button-24">visit here!</button>
				</div>
			<img src={about} style={{width: "100%", height: "100vh"}}>
			</img> 
			
		</div>
	);
};

AboutUs.propTypes = {
	match: PropTypes.object
};
