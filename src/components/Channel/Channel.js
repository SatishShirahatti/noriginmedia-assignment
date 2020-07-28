import React from 'react';
import Program from './Program/Program';
import moment from "moment";
import './Channel.scss';

function formatteddates(schedules) {
	const channelsorted ={}
	schedules.forEach(({ id, title, start, end }, index) => {
		const Sdate = moment(start).format("HH:MM");
		const Edate = moment(end).format("HH:MM");
		const list = channelsorted[Sdate] || [];
		list.push({
			id,
			title,
			Sdate,
			Edate,
			start,
			end,
			key: index
		});
		channelsorted[Sdate] = list;
	});
	return channelsorted;
}

function Channel({schedules}) {
	// const channelsorted = formatteddates(schedules);
	// const dates = Object.keys(channelsorted);
	// const sortedaaray = dates.sort((a, b) => b.valueOf() - a.valueOf())
	//console.log("dates", channelsorted)
    return (
        <div className="channel-program">
			<div className="channel-program">
				{
					schedules.map((schedule, index) => <Program data={schedule} key={index} />)
				}
			</div>
        </div>
    );
}

export default Channel;
