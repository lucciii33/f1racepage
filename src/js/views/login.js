import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card } from "../component/card";
import shop from "../../img/shop1.webp";
import F1Car from "../../img/prueba.jpeg";
import about from "../../img/about1.jpg"

export const Login = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="">
			<input placeholder="email"></input>
			<input placeholder="password"></input>
		</div>
	);
};

Login.propTypes = {
	match: PropTypes.object
};
