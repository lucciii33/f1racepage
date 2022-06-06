import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card } from "../component/card";
import shop from "../../img/shop1.webp";
import F1Car from "../../img/prueba.jpeg";
import redbullcar from "../../img/redbullcar.jpg"

export const F1Trans = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="position-relative">
				<div className="position-absolute top-50 start-0 translate-middle-y text-center ms-5">
					<div className="redbullcar">

					<h4>Here you can see everything related to F1 in 2022 <br/> from which track they run to where <br/> the runners were</h4>
					<h6>click here an enjoy</h6>
					</div>
					<Link to="/RaceTimeMap" className="">
						 <button className="btn btn-danger m-3"> visit F1 the caledar</button>
					</Link>
					<Link to="/driversresults">
						 <button className="btn btn-warning">check lasts result</button>
					</Link>
				</div>
			<img src={redbullcar} style={{width: "100%", height: "100vh"}}>
			</img> 
			
		</div>
	);
};

F1Trans.propTypes = {
	match: PropTypes.object
};
