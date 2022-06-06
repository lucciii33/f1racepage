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
		<div className="ms-auto me-auto">
			<div>
				<h1 className="text-center text-dark mt-3">MONACO</h1>
			</div>
			{store.driverResult.map((dri, i) => {

				return (
					<div className="m-5" key={i}>
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
									<td className="align-middle">{dri.position}</td>
									<td className="align-middle">{dri.number}</td>
									<td className="d-grid align-middle">{dri.Driver.givenName} {dri.Driver.familyName}</td>
									<td className="align-middle" >{dri.Constructor.name}</td>
									<td className="align-middle">{dri.laps}</td>
									<td className="align-middle">{dri.grid}</td>
									<td className="align-middle">{dri.FastestLap.Time.time}</td>
									<td className="align-middle">{dri.status}</td>
									<td className="align-middle" >{dri.points}</td>


								</tr>
								{/* {dri.Results.map((resu, i)=>{
								})} */}

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
