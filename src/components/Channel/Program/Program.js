import React from 'react';
import moment from 'moment';
import { HOUR_SIZE } from '../../../common/constants';
import './Program.scss';

export default ({ data }) => {

	const startDate = moment(data.start);
	const endDate = moment(data.end);

	const startStr = startDate.format('HH:mm');
	const endStr = endDate.format('HH:mm');

    const duration = moment.duration(endDate.diff(startDate));
 
    var mintues = duration.asMinutes();

    // const sDate = new Date(data.start);
	// const eDate = new Date(data.end);
	// console.log("start", sDate)


    // console.log('pl', mintues, pl);
    const elWidth = (HOUR_SIZE / 60) * mintues;
	//console.log("wid", elWidth)
    const startMinutes = startDate.hours() * 60 + startDate.minutes();
	
    const position = ((HOUR_SIZE / 60) * startMinutes);
    // console.log('pos', position, containerWidth, (HOUR_SIZE / 60) * startMinutes);
   // console.log('->', { width: elWidth, left: position });
    return (
        <div className="program" style={{ width: elWidth, left: position }}>
            <h3 title={data.title}>{data.title}</h3>
            <div className="time">
				{startStr} - {endStr}
            </div>
        </div>
    );
};
