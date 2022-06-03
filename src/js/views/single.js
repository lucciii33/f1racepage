import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, useLocation } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const Single = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	var data = useLocation().state;
	console.log(data)
	return (
		<div className="d-flex flex-wrap justify-content-center">
			{store.shop.map((product, index)=><Card  data={{
                    image: product.image,
                    description: product.description,
					price: product.price,
					gender: product.gender,
					id: product.id
                  }}
                  key={index}
				  />)}
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
