import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card } from "../component/card";

export const Single = ({data}) => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="d-flex flex-wrap justify-content-center">
			{store.shop.map((product, index)=><Card  data={{
                    value1: product.image,
                    value2: product.description,
					value3: product.price,
                  }}
                  key={index}
				  />)}
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
