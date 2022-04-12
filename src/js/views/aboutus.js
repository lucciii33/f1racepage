import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card } from "../component/card";
import shop from "../../img/shop1.webp";
import F1Car from "../../img/prueba.jpeg";

export const AboutUs = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="">
			<div>
				<div className="d-flex justify-content-start">
				<img src={shop} className="image" style={{width: '550px', heigth: 'auto'}}></img>
				<p className="text-white">somos una compania especializada en ropa sobre la formula 1</p>
				</div>
				<div className="d-flex justify-content-end">
				<p className="text-white">somos una compania especializada en ropa sobre la formula 1</p>
				<img src={F1Car} className="image" style={{width: '550px', heigth: 'auto'}}></img>
				</div>
			</div>
			<div>

			</div>
		</div>
	);
};

AboutUs.propTypes = {
	match: PropTypes.object
};
