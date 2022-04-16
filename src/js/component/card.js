import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card = ({data}) => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="m-2">
			<div className="card" style={{width: "18rem"}}>
				<img src={data.value1} alt="..." />
				<div className="card-body">
					<h5 className="card-title">{data.value2}</h5>
					<p className="card-text">{data.value3}$</p>
					<Link to="/information"><button href="#" className="button-24">BUY ME!</button></Link>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	match: PropTypes.object
};
