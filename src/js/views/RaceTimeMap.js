import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card } from "../component/card";
import { RaceTime } from "./RaceTime";

export const RaceTimeMap = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="d-flex flex-wrap">
			{store.RaceSchedule.map((race,i) => {
				return (
					<div className="racesbox m-2" key={i}>

						<div className="text-center">
							<h1>Qualifying</h1>
							<p className="border-bottom border-dark">time:{race.Qualifying.time}</p>
						</div>
						<div className="text-center">
							<h1 className="m-3">{race.Circuit.circuitName}</h1>
							<h2>{race.raceName}</h2>
							<p>time:{race.time}</p>
							<p>{race.season}</p>
						</div>

					</div>
				)
			})}

			<Link to="/driversresults">
				<button></button>
			</Link>
		</div>
	);
};

RaceTimeMap.propTypes = {
	match: PropTypes.object
};
