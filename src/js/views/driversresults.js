import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card } from "../component/card";
import { RaceTime } from "./RaceTime";

export const DriverResults = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="d-flex flex-wrap">
			{store.driverResult.Results.map((dri, i) => {
				return (
					<div className="m-2">
						<table className="table table-light table-striped">
							<thead>
								<tr>
									<th>position</th>
									<th>number</th>
									<th>Driver</th>
									<th>Constructor</th>
									<th>Laps</th> 
									<th>Grid</th>
									<th>Time</th> 
									<th>Status</th>
									<th>Points</th>
								</tr>
								<tr>
									<td className="align-middle">{dri.Results.position}</td>
									<td className="align-middle">{dri.Results.number}$</td>
									{/* <td>{dri.Results.Driver.familyName }</td> */}
									<td className="align-middle" >{dri.Results.Constructor.name}</td>
									<td>{dri.Results.laps}</td>
									<td className="align-middle">{dri.Results.Time.time}</td>
									<td className="align-middle">{dri.Results.status}</td>
									<td className="align-middle" >{dri.Results.points}</td>

								
								</tr>
							</thead>
						</table>
						

					</div>
				)
			})}

		</div>
	);
};

DriverResults.propTypes = {
	match: PropTypes.object
};
