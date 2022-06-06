import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const AccessorieShop = ({data}) => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="d-flex flex-wrap justify-content-center">
			{store.shop.filter(product => product.gender === 'accessories').map((product, index)=><Card  data={{
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
AccessorieShop.propTypes = {
	match: PropTypes.object
};
