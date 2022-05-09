import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const RaceTime = ({data}) => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="d-flex flex-wrap">
			<div className="card-body">
				<p className="card-text">  {data.value1}</p>
				<p className="card-text">  {data.value2}</p>
				<p className="card-text">  {data.value3}</p>
				<p className="card-text">  {data.value4}</p>
			</div>
		</div>
	);
};

RaceTime.propTypes = {
	match: PropTypes.object
};
