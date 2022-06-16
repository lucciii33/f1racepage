import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, useLocation } from "react-router-dom";
import { Context } from "../store/appContext";


export const ResultProducts = ({ data }) => {
	const { store, actions } = useContext(Context);
	// const [productQuantity, setProductQuantity] = useState([]);
	// const [answerLess, setAnswerLess] = useState([])
	const [answer, setAnswer] = useState([])
	const [totalCost, setTotalCost] = useState(0)
	const params = useParams();
	var data = useLocation().state;
	useEffect(()=>{
		let resultArray = store.carShop.map((fav)=>{
			if(fav.quantity > 0){
				let product = store.shop.find((item)=>{
					if(fav.product_id == item.id){
						return item
					}})
					return product.price*fav.quantity
			}else{
				
			}
			
			})
			console.log(resultArray)
			setAnswer(resultArray)
	},[])
	useEffect(()=>{
		let result = getTotalCost()
		setTotalCost(result)
	},[answer])

	const createTotalCost=(fav)=>{
		let product = store.shop.find((item)=>{
			if(fav.product_id == item.id){
				return item
			}})
			let result=product.price
			setAnswer([...answer, result])
	}
	const reduceTotalCost=(fav)=>{
		let product = store.shop.find((item)=>{
			if(fav.product_id == item.id){
				return item
			}})
			let result=product.price
			setAnswer([...answer, -result])
	}
	// const reduceTotalCostDelete=(fav)=>{
	// 	let product = store.shop.find((item)=>{
	// 		if(fav.product_id == item.id){
	// 			return item
	// 		}})
	// 		let result=product.price
	// 		let value = product.quantity
	// 		setAnswer([...answer, -value])
	// }
	const getTotalCost=()=>{
		let totalcost = store.carShop.reduce((totalPrice, currentProduct) => totalPrice + (currentProduct.product.price * currentProduct.quantity), 0)
		console.log(totalcost)
		return totalcost
		
	}

////////////////////////////////////here start the minus
// useEffect(()=>{
// 	let resultless = getTotalCostless()
// 	setTotalCost(resultless)
// },[answerLess])
// const createTotalCostless=(fav)=>{
// 	let product = store.shop.find((item)=>{
// 		if(fav.product_id == item.id){
// 			return item
// 		}})
// 		let resultLess=product.price
// 		setAnswerLess([...answerLess, resultLess])
// }
// const getTotalCostless=()=>{
// 	 let totalcostLess = answerLess.map(value)=>{

// 		 return value - 1; 
// 	 }  
// 	return totalCost
// 	}




	return (
		<div className="d-flex row m-5"> 
		<br/>
		<div className="col-md-9">
			{
				store.carShop.map((fav) => {
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
												onClick={() => {
													// createTotalCost(fav)
													
													actions.updateCarShop(fav.id, fav.quantity)
												}}
											>+</button>
											 <p>{fav.quantity}</p>
											<button className="btn btn-success m-1" 
												onClick={() => {
													// reduceTotalCost(fav)
													actions.updateCarShopless(fav.id, fav.quantity)
												}}
											>-</button>
										</div>

									</td>

									  <td className="align-middle">{product.price*fav.quantity}</td> 
									<td className="align-middle"><button className="button-24" 
									onClick={() => {
										
										actions.deleteCarShop(fav.id)
									
									}}>Remove</button></td>
								</tr>
							</thead>
						</table>
					);
				})
			}
		</div >
			<div className="col-md-3 totalcost text-center">
				<div>
				<h3 className="textsummary">Order summary</h3>
				<p className="textsummary">Items: <span className="text-dark"><strong> {store.carShop.length}</strong></span></p>
				<p className="textsummary">Total cost: <span className="text-dark"><strong>${getTotalCost()}</strong></span> </p>
				<div className="p-0">
					<div className="d-flex inputbox">
				<input type='checkbox' className="checkboxcolor"></input>
				<label  className="m-0"></label>
					National Shipping(USA)
					</div>
					<div className="d-flex inputbox">
				<input type='checkbox' className="checkboxcolor"></input>
				<label></label>
					National Shipping(USA)
					</div>
				</div>
				<button className="btn btn-success mt-3">Checkout</button>
				</div>
			</div>
		</div>


	);
};
ResultProducts.propTypes = {
	match: PropTypes.object
};
