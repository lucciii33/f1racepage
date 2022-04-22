import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const ManShop = ({data}) => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="d-flex flex-wrap justify-content-center">
			{store.shop.filter(product => product.gender === 'men').map((product, index)=><Card  data={{
                    value1: product.image,
                    value2: product.description,
					value3: product.price,
					value4: product.gender
                  }}
                  key={index}
				  />)}
		</div>
	);
};
ManShop.propTypes = {
	match: PropTypes.object
};
