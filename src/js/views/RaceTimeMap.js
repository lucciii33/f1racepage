import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card } from "../component/card";
import { RaceTime } from "./RaceTime";

export const RaceTimeMap = ({data}) => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="d-flex flex-wrap">
			{store.RaceSchedule.map((rec, i)=><RaceTime  data={{
                    value1: rec.Circuit?.circuitName ,
                    value2: rec.time,
					value3: rec.season,
					value4: rec.date,
                  }}
                  key={i}
				  />)}
				
		
		</div>
	);
};

RaceTimeMap.propTypes = {
	match: PropTypes.object
};
