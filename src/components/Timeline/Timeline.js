import React, { Component } from "react";
import TimeHourList from "../TimeHourList/TimeHourList";
import ChannelHolder from "../ChannelHolder/ChannelHolder";
import "./Timeline.scss"

class TimelineContainer extends Component{

	render(){
		return(
			<div className="timeline-container">
				<div className="line" />
				<div className="holder">
					<div className="time-holder">
						<TimeHourList/>
						<ChannelHolder/>
					</div>
				</div>
			</div>
		)
	}
}


export default TimelineContainer