import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";


export const ResultProducts = ({ fav }) => {
	const { store, actions } = useContext(Context);
	const [itemCount, setItemCount] = useState(0);
	const [answer, setAnswer] = useState('')
	const params = useParams();

	return (
		<div className="d-flex flex-wrap justify-content-center m-5">
			{
				store.carShop.map((fav, id) => {

					return (

						<table className="table table-light table-striped">
							<thead>
								<tr>
									<th>image</th>
									<th>product</th>
									<th>price</th>
									<th>Quantity</th>
									<th>Total price</th>
									<th>remove</th>
								</tr>
								<tr>
									<td><img src={fav.value1} style={{ width: "80px" }}></img></td>
									<td className="align-middle">{fav.value2}</td>
									<td className="align-middle">{fav.value3}$</td>
									<td className="align-middle" >
										<div className="d-flex ">

											<button className="button-24 m-1" style={{  height: "5px", width:"10px"}}
												onClick={() => {
													setItemCount(itemCount + 1);
												}}
											>+</button>
											<h6>{itemCount}</h6>
											<button className="button-24 m-1" style={{  height: "15px", width:"25px"}}
												onClick={() => {
													setItemCount(itemCount - 1);
												}}
											>-</button>
										</div>

									</td>

									<td className="align-middle">${itemCount*fav.value3}</td>
									<td className="align-middle"><button className="button-24">Remove</button></td>
								</tr>
							</thead>
						</table>
					);
				})
			}
		</div >


	);
};
ResultProducts.propTypes = {
	match: PropTypes.object
};
