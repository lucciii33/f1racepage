import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card } from "../component/card";
import shop from "../../img/shop1.webp";
import F1Car from "../../img/prueba.jpeg";
import contact from "../../img/road.jpg"

export const ContactUs = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div >
			<div className="form">

			<input>ff</input>
			<input></input>
			<textarea></textarea>
			</div>
			<img className="contactimage" src={contact}></img> 
			
		</div>
	);
};

ContactUs.propTypes = {
	match: PropTypes.object
};
