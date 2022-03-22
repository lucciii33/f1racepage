import React, { useState, useEffect } from "react";

import "../../styles/home.css";
import propTypes from "prop-types";
import reactDom from "react-dom";
import { Link } from "react-router-dom";



let history = [
	['green','green','green','green','green'],
	['red','red','red','red','red'],
	['red','red','red','red','grey'],
	['red','red','red','grey','grey'],
	['red','red','grey','grey','grey'],
	['red','grey','grey','grey','grey'],
	['grey','grey','grey','grey','grey'],
]
export const Home = ({ counter }) => {

	const [colors, setColors] = useState(history[history.length-1]); 
	const [time, setTime] = useState(0); 
	const [buttonColor, setButtonColor]=useState('reeed')
	 const [buttonColor1, setButtonColor1]=useState('greeen')
	useEffect(()=>{
		setInterval(()=>{
		if(history.length>0)setColors(history.pop())
		},1000)
	}, [])

	var timer = null;
	function switchColor() {
		if (buttonColor == "reeed") setButtonColor("greeey");
	}
	  function switchColor1() {
	 	if (buttonColor1 == 'greeen') setButtonColor1("reeed");
	 }
	function switchClockStatus() {
		if (timer == null) {
			timer = setInterval(switchColor, 2000);
			console.log(timer);
		}
		  if(timer == timer){
		  	timer = setInterval(switchColor1, 7000);
		 }
		else {
			clearInterval(timer);
			timer = null;
			console.log(timer);
		}
	}

	switchClockStatus();
	return (
		<div className=" mt-5 ">
			<div className=" ">
				<div>
					<div className='semaforo m-2 mb-0'>

						
					</div>



					<div className="d-flex mt-0">
						{colors.map((c, index) => {
							return <div className="sema m-2 mt-0">
								<div className={`${c} light`} key={index}></div>
							</div>
						})}
					</div>



					<div className="d-flex mt-0">
						{colors.map((c, index) => {
							return <div className="sema m-2 mt-0">
								<div className={`${c} light`} key={index}></div>
							</div>
						})}
					</div>
				</div>

			</div>
			<Link to="demo"><button className={buttonColor == "reeed" ? "greeey": buttonColor1 =='greeen'? 'reeed' : 'greeen'}>Start here</button></Link>	

		</div>
	)
}

Home.propTypes = {
	num1: propTypes.string,
	num2: propTypes.string,
	num3: propTypes.string,
	num4: propTypes.string,
	num5: propTypes.string,
	num6: propTypes.string,
};