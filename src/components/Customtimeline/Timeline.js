import React from "react";
import moment from "moment";
import TimelineItem from "./Timelineitem";
import "./Timeline.scss";

function getFormattedData(items, format = "hh:mm") {
	const activities = {};
	items.forEach(({ ts, text }, index) => {
		const date = moment(ts);
		const dateStr = date.format("DD MMM YYYY");
		const list = activities[dateStr] || [];
		list.push({
			time: date.format(format),
			text,
			key: index,
		});
		activities[dateStr] = list;
	});
	return activities;
}
function Timeline({ items, format }) {
	const activities = getFormattedData(items, format);
	const dates = Object.keys(activities);
	return (
		<div className="time-line-ctnr">
			{dates.map(d => (
				<div className="time-line" key={d}>
					<div className="time-label">
						<span>{d}</span>
					</div>								
					{activities[d].map(({ time, text, key }) => (
						<TimelineItem time={time} text={text} key={key} />
					))}					
				</div>
			))}
		</div>
	);
}
export default Timeline;