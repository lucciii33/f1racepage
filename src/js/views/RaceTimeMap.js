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
			{store.RaceSchedule.map((race)=>{
				return(
					<div>
						<div>
							<div>
								<p>Qualifying</p>
								<p>{race.Qualifying.time}</p>
								<p>{race.Qualifying.time}</p>
							</div>
						</div>
						<div className="text-center">
						<h1>{race.Circuit.circuitName}</h1>
						<p>{race.raceName}</p>
						<p>{race.time}</p>
						<p>{race.season}</p>
						</div>

					</div>
				)
			})}
                 
				
		
		</div>
	);
};

RaceTimeMap.propTypes = {
	match: PropTypes.object
};
