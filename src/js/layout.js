import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import { Scene } from "three";
import { Information } from "./component/information";
import {AboutUs} from "./views/aboutus"
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import{NavbarTwo}from "./component/navbartwo"
import { RaceTime } from "./views/RaceTime";
import {RaceTimeMap} from "./views/RaceTimeMap"
import { WomanShop } from "./views/womanshop";
import { ManShop } from "./views/manshop copy";
import { AccessorieShop } from "./views/accessorieshop";
import { ResultProducts } from "./views/resultproducts";
import { DriverResults } from "./views/driversresults";
import { ContactUs } from "./views/contactus";
import { Login } from "./views/login";
import { F1Trans } from "./views/f1trans";
import { Register } from "./views/register";
//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<NavbarTwo/>
					<Navbar />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/scene">
							<Scene />
						</Route>
						<Route exact path="/single">
							<Single />
						</Route>
						<Route exact path="/information/:id" component={Information} />
						<Route exact path="/register" component={Register} />
						<Route exact path="/f1trans" component={F1Trans} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/contactus" component={ContactUs} />
						<Route exact path="/womanshop" component={WomanShop} />
						<Route exact path="/manshop" component={ManShop} />
						<Route exact path="/accessorieshop" component={AccessorieShop} />
						<Route exact path="/resultproducts" component={ResultProducts } />
						<Route exact path="/driversresults" component={DriverResults} />
						<Route exact path="/aboutus">
							<AboutUs/>
						</Route>
						<Route exact path="/aboutus">
							<NavbarTwo/>
						</Route>
						<Route exact path="/RaceTime" component={RaceTime} />
						<Route exact path="/RaceTimeMap" component={RaceTimeMap} />
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
