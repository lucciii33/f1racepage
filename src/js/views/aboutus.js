import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card } from "../component/card";
import shop from "../../img/shop1.webp";
import F1Car from "../../img/prueba.jpeg";
import about from "../../img/about.jpg"

export const AboutUs = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="position-relative">
			<img src={about} style={{width: "100%", height: "100vh"}}>
			</img> 
				<div className="position-absolute top-50 end-0 translate-middle-y text-center me-2">
					<h1>Maiele Racing</h1>
					<h3>have been found by Angelo Maiele in 2022</h3>
					<h5>Its been 1 year word shipping amazong f1 products and information</h5>
					<p className="m-4">for all those fans rigth there, also you have a lot information about f1 like races, times, tracks etc</p>
					<button className="button-24">visit here!</button>
				</div>
			
		</div>
	);
};

AboutUs.propTypes = {
	match: PropTypes.object
};
