import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, useLocation } from "react-router-dom";
import { Context } from "../store/appContext";


export const ResultProducts = ({ data }) => {
	const { store, actions } = useContext(Context);
	const [itemCount, setItemCount] = useState(0);
	const [answer, setAnswer] = useState('')
	const params = useParams();
	var data = useLocation().state;

	return (
		<div className="d-flex row"> 
		<div className="col-md-9">
			{
				store.carShop.map((fav, id) => {
					let product = store.shop.find((item)=>{
						if(fav.product_id == item.id){
							return item
						}
						
					})
					
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
									<td><img src={product.image} style={{ width: "80px" }}></img></td>
									<td className="align-middle">{product.description}</td>
									<td className="align-middle">{product.price}$</td>
									<td className="align-middle" >
										<div className="d-flex ">

											<button className="btn btn-danger m-1" 
												onClick={(quantity) => {
													actions.updateCarShop(product.quantity + 1)
												}}
											>+</button>
											<h6>{product.quantity}</h6>
											<button className="btn btn-success m-1" 
												onClick={(quantity) => {
													actions.updateCarShop(product.quantity - 1)
												}}
											>-</button>
										</div>

									</td>

									 <td className="align-middle">${itemCount*product.price}</td> 
									<td className="align-middle"><button className="button-24">Remove</button></td>
								</tr>
							</thead>
						</table>
					);
				})
			}
		</div >
			<div className="col-md-3">
				<h3>Order summary</h3>
				<p>items {store.carShop.length}</p>
				<p>total cost {}</p>
			</div>
		</div>


	);
};
ResultProducts.propTypes = {
	match: PropTypes.object
};
