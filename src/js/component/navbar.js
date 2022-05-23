import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { InterpolateSmooth } from "three";
import { Context } from "../store/appContext";


export const Navbar = () => {

	const { store, actions } = useContext(Context);
	console.log(store.carShop)
	// let task = store.carShop.map((favorite)=>{ 
	// 	let product = store.shop.find((item)=>{
	// 		if(favorite.product_id == item.id){
	// 			return item
	// 		}
			
	// 	})
	// 	return product
	// })
	// console.log(task)
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<a className="navbar-brand fw-bold fs-4" href="#" >MAIELE RACING</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mx-auto mb-2 mb-lg-0">
						<Link to="/" className="text-decoration-none">
							<li className="nav-item">
								<a className="nav-link active" aria-current="page" href="#">Home</a>
							</li>
						</Link>
						<Link to="/aboutus" className="text-decoration-none">
							<li className="nav-item">
								<a className="nav-link" href="#">About us</a>
							</li>
						</Link>
						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Shop
							</a>
							<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
								<li><a className="dropdown-item" href="/manshop">Mens</a></li>
								<li><a className="dropdown-item" href="/womanshop">Women</a></li>
								<li><a className="dropdown-item" href="accessorieshop">accessories</a></li>
							</ul>
						</li>
						<Link to="/contactus" className="text-decoration-none">
						<li className="nav-item">
							<a className="nav-link" href="#" tabindex="-1" aria-disabled="true">Contact</a>
						</li>
						</Link>
					</ul>
					<div className="buttons d-flex">
						<a href="" className="btn btn-outline-dark m-1" ><i className="fas fa-user-plus me-1"></i>register</a>
						<a href="" className="btn btn-outline-dark m-1" ><i className="fas fa-sign-out-alt me-1"></i>
							Sign in</a>
						<ul className="navbar-nav ">
							<li className="nav-item dropdown">
								<button
									className="btn btn-outline-secondary m-1 nav-link dropdown-toggle"
									href="#"
									id="navbarDropdown"
									role="button"
									data-bs-toggle="dropdown"
									aria-expanded="false"
								>
									<i className="fas fa-cart-plus me-1"></i>
									Card({store.carShop.length})
								</button>
								<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
									{store.carShop.map((fav, i) => {
										let product = store.shop.find((item)=>{
											if(fav.product_id == item.id){
												return item
											}
											
										})
										return (
											<li key={i}>
												<Link to={{ pathname: "/information/" + product.id, state: product }} className="text-decoration-none text-dark">{product.description}</Link>
												<i
													className="fas fa-trash-alt m-2"
													onClick={() => actions.deleteCarShop(product.id)}
												></i>
												
											</li>
										);
									})}
									<button onClick={()=>{console.log(store.carShop)}}>try</button>
									<Link to="/resultproducts">
										<li>See favorites</li>
									</Link>
								</ul>
							</li>
						</ul>
					</div>
					<i className="far fa-cart-plus"></i>
				</div>
			</div>
		</nav>
	);
};
