import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, useLocation } from "react-router-dom";
import { Context } from "../store/appContext";

export const Information = ({data}) => {
	var data = useLocation().state;
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [image, setImage] = useState('')
	return (
		<div className="m-2">
			<div className="card mb-3" style={{maxWidth: '540px'}}>
				<div className="row g-0">
					<div className="col-md-4">
						<img src={data.value1} className="img-fluid rounded-start" alt="..."/>
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title">{data.value2}</h5>
							<p className="card-text">{data.value3}$</p>
							<button className="button-24">Add to card</button>
							<p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
						</div>
					</div>
				</div>
			</div>
		</div >
	);
};

Information.propTypes = {
	match: PropTypes.object
};
