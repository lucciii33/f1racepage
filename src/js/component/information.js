import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Information = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="m-2">
			<div className="card mb-3" style={{maxWidth: "540px"}}>
			<div className="row g-0">
				<div className="col-md-4">
				<img src="https://ae01.alicdn.com/kf/S4bf2eca328914c5abb52c2ec38b65c74M/F1-primavera-casual-amg-logotipo-do-carro-3d-impress-o-hoodie-harajuku-z-per-jaqueta-moda.jpg_Q90.jpg_.webp" className="card-img-top" alt="..." />
				<div className="d-flex">
						<img src='https://ae01.alicdn.com/kf/S744d50d84e1f4c2db9b0ba66b9dd56f7U/F1-primavera-casual-amg-logotipo-do-carro-3d-impress-o-hoodie-harajuku-z-per-jaqueta-moda.jpg_640x640.jpg' style={{ width: '55px', height: 'auto' }} className="m-1"></img>
						<img src='https://ae01.alicdn.com/kf/Sa2b2825b23e040e39bbfceadf34e66a4u/F1-primavera-casual-amg-logotipo-do-carro-3d-impress-o-hoodie-harajuku-z-per-jaqueta-moda.jpg_Q90.jpg_.webp' style={{ width: '55px', height: 'auto' }} className="m-1"></img>
						<img src='https://ae01.alicdn.com/kf/S4bf2eca328914c5abb52c2ec38b65c74M/F1-primavera-casual-amg-logotipo-do-carro-3d-impress-o-hoodie-harajuku-z-per-jaqueta-moda.jpg_Q90.jpg_.webp' style={{ width: '55px', height: 'auto' }} className="m-1"></img>
					</div>
				</div>
				<div className="col-md-8">
				<div className="d-flex d-flex justify-content-center">
						<img src='https://ae01.alicdn.com/kf/S744d50d84e1f4c2db9b0ba66b9dd56f7U/F1-primavera-casual-amg-logotipo-do-carro-3d-impress-o-hoodie-harajuku-z-per-jaqueta-moda.jpg_640x640.jpg' style={{ width: '55px', height: 'auto' }} className="m-1"></img>
						<img src='https://ae01.alicdn.com/kf/Sa2b2825b23e040e39bbfceadf34e66a4u/F1-primavera-casual-amg-logotipo-do-carro-3d-impress-o-hoodie-harajuku-z-per-jaqueta-moda.jpg_Q90.jpg_.webp' style={{ width: '55px', height: 'auto' }} className="m-1"></img>
						<img src='https://ae01.alicdn.com/kf/S4bf2eca328914c5abb52c2ec38b65c74M/F1-primavera-casual-amg-logotipo-do-carro-3d-impress-o-hoodie-harajuku-z-per-jaqueta-moda.jpg_Q90.jpg_.webp' style={{ width: '55px', height: 'auto' }} className="m-1"></img>
					</div>
					<div className="card-body">
						<h5 className="card-title">Mercedez  hoodie</h5>
						<div className="d-flex justify-content-center">
						<div className="border border-dark m-1 p-1">S</div>
						<div className="border border-dark m-1 p-1">M</div>
						<div className="border border-dark m-1 p-1">L</div>
						<div className="border border-dark m-1 p-1">XL</div>
						</div>
						<button className="btn btn-danger">
							Buy me!
						</button>
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
