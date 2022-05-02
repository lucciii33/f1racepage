import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const CarResut = ({fav}) => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		
			
			<tbody className="table table-dark table-striped">

				<tr>
					<th>image</th>
					<th>product</th>
					<th>price</th>
					<th>Quantity</th>
					<th>Total price</th>
					<th>remove</th>
				</tr>
				<tr>
					<td><img src={fav.value1}></img></td>
					<td>{fav.value2}</td>
					<td>{fav.value3}</td>
					<td>x+</td>
					<td>+++</td>
					<td><button className="button-24">Remove</button></td>
				</tr>
			</tbody>
		
	);
};

CarResut.propTypes = {
	match: PropTypes.object
};
