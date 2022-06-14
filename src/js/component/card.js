import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card = ({data}) => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	const [colorButton, setColorButton] = useState("button-25");
	return (
		<div className="m-2">
			<div className="card" style={{width: "18rem"}}>
				<img src={data.image} alt="..." />
				<div className="card-body">
					<h5 className="card-title">{data.description}</h5>
					<p className="card-text">{data.price}$</p>
					<div className="d-flex justify-content-between m-1">

				<Link to={{ pathname: "information/" + data.name, state: data }} className="text-decoration-none">
                <button className="button-24 ">
                  See Instructions
                </button>
              </Link>
			  <button className={colorButton == "button-25" ? "button-24" : "button-25"}
                onClick={() => {
                  actions.addCarShop(data.price, data.description, data.image, data.id, 1);
				//   actions.getCarShop();
				   setColorButton("button-24");
                }}
				
				>add Car</button>
					</div>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	match: PropTypes.object
};
