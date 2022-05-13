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
		<div className="d-flex d-flex justify-content-between">
			<div className="imacon m-2">

				<img className="contactimage" src="https://www.pixelstalk.net/wp-content/uploads/2016/10/Formula-1-Wallpaper-HD-Free-Download.jpg"></img>
			</div>
			<div className="originalform">
				<div className="line">

				<h6 className="">Your Name</h6>
				</div>

				<input className="form"></input>
				<h6>Your Name</h6>
				<input className="form"></input>
				<h6>Your Phone</h6>
				<input className="form"></input>
				<h6>Wite us!</h6>
				<textarea className="form"></textarea>

			</div>

		</div>
	);
};

ContactUs.propTypes = {
	match: PropTypes.object
};
