import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { CarResut } from "../component/carresult";

export const ResultProducts = ({data}) => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="">
			{store.carShop.map((fav, index)=><CarResut  fav={{
                    value1: fav.image,
                    value2: fav.description,
					value3: fav.price,
					value4: fav.gender
                  }}
                  key={index}
				  />)}
		</div>
	);
};
ResultProducts.propTypes = {
	match: PropTypes.object
};
