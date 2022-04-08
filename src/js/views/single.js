import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const Single = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="d-flex flex-wrap">
			<Card/>
			<Card/>
			<Card/>
			<Card/>
			<Card/>
			<Card/>
			<Card/>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
