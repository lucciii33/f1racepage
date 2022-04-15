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
						<Route exact path="/information">
							<Information/>
						</Route>
						<Route exact path="/aboutus">
							<AboutUs/>
						</Route>
						<Route exact path="/aboutus">
							<NavbarTwo/>
						</Route>
						<Route exact path="/RaceTime" component={RaceTime} />
						<Route exact path="/RaceTime" component={RaceTimeMap} />
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
