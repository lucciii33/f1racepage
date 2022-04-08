import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="m-2">
			<div className="card" style={{width: "18rem"}}>
				<img src="https://ae01.alicdn.com/kf/S4bf2eca328914c5abb52c2ec38b65c74M/F1-primavera-casual-amg-logotipo-do-carro-3d-impress-o-hoodie-harajuku-z-per-jaqueta-moda.jpg_Q90.jpg_.webp" className="card-img-top" alt="..." />
				<div className="card-body">
					<h5 className="card-title">Mercedes Hoddie</h5>
					<p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
					<Link to="/information"><button href="#" className="btn btn-primary">Go somewhere</button></Link>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	match: PropTypes.object
};
