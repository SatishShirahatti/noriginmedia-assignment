import React, { Component } from 'react';
import { HOUR_SIZE } from "../../common/constants";
import "./TimeHourList.scss";

class TimeHourList extends Component {

	constructor(props) {
		super(props);
		this.hoursList = [];
		for (let i = 0; i < 24; i++) {
			this.hoursList.push(i);
		}
	}

	render() {
		const currentTime = new Date().getHours();
		return (

			<div className="time-labels" >
				{this.hoursList.map((h) => (
					<div key={h} className={currentTime === h ? "time-label activeTime" : "time-label"}
						style={{ width: HOUR_SIZE, minWidth: HOUR_SIZE }}>
						{h + ":00"}
						{/* h.toString().padStart(2, '0') */}
					</div>
				))}
			</div>

		);
	}
}

export default TimeHourList;