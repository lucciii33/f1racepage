import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, useLocation } from "react-router-dom";
import { Context } from "../store/appContext";

export const Information = ({data}) => {
	var data = useLocation().state;
	console.log(data)
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [image, setImage] = useState('')
	return (
		<div className="m-2 mt-5 d-flex justify-content-center">
			<div className="card  mb-3" style={{maxWidth: '800px'}}>
				<div className="row g-0">
					<div className="col-md-4">
						<img src={data.image} className="img-fluid rounded-start" alt="..."/>
					</div>
					<div className="col-md-8">
						<div className="card-body me-5">
							<h5 className="card-title m-2">{data.description}</h5>
							<p className="card-text m-2">${data.price}</p>
							<button className="button-24 m-2">Add to card</button>
							<div className="d-flex m-2">
								<div className="m-2 messu">XS</div>
								<div className="m-2 messu">S</div>
								<div className="m-2 messu">M</div>
								<div className="m-2 messu">L</div>
								<div className="m-2 messu">XL</div>
							</div>
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
