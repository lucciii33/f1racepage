import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card } from "../component/card";
import shop from "../../img/shop1.webp";
import F1Car from "../../img/prueba.jpeg";
import about from "../../img/about1.jpg"

export const Register = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="containerlogin position-relative">
		<div className="loginbox position-absolute top-50 start-50 translate-middle bg-light">
			<h1 className="text-center mt-2">Register</h1>
			<form>
				<div className="mb-3 text-center mt-2">
					<label for="exampleInputEmail1" className="form-label">Email address</label>
					<input type="email"  id="exampleInputEmail1" aria-describedby="emailHelp" />
					<div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
				</div>
				<div className="mb-3 text-center ms-4">
					<label for="exampleInputPassword1" className="form-label">Password</label>
					<input type="password" id="exampleInputPassword1" />
				</div>
				<div className="mb-3 form-check">
					<input type="checkbox" className="form-check-input" id="exampleCheck1" style={{marginLeft: "220px"}}/>
					<label className="form-check-label" for="exampleCheck1">Check me out</label>
				</div>
				<button type="submit" className="button-24" style={{marginLeft: "290px"}}>Submit</button>
			</form>
		</div>
		</div>
	);
};

Register.propTypes = {
	match: PropTypes.object
};
