import React from "react";
import "./Timeline.scss";
function TimlineItem({ time, text }) {
	return (
		<div>
			<div className="time-line-item">
				<div className="time">
					{time}
					</div>
					<div className="time-line-header">{text}</div>
			</div>
		</div>
	);
}

export default TimlineItem;