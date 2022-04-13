import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<a className="navbar-brand fw-bold fs-4" href="#" >MAIELE RACING</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mx-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#">Home</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">About us</a>
						</li>
						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Shop
							</a>
							<ul className="dropdown-menu" aria-labelledby="navbarDropdown">
								<li><a className="dropdown-item" href="#">Mens</a></li>
								<li><a className="dropdown-item" href="#">Women</a></li>
								<li><a className="dropdown-item" href="#">Kids</a></li>
							</ul>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#" tabindex="-1" aria-disabled="true">Contact</a>
						</li>
					</ul>
					<div className="buttons">
							<a href="" className="btn btn-outline-dark m-1" ><i className="fas fa-user-plus me-1"></i>register</a>
							<a  href="" className="btn btn-outline-dark m-1" ><i className="fas fa-sign-out-alt me-1"></i>
							Sign in</a>
							<a  href="" className="btn btn-outline-dark m-1" >
							<i className="fas fa-cart-plus me-1"></i>
								Card(0)</a>
					</div>
					<i className="far fa-cart-plus"></i>
				</div>
			</div>
		</nav>
	);
};
