import React from 'react';
import moment from 'moment';

import { HOUR_SIZE } from '../../../common/constants';

import './Program.scss';

export default ({ data }) => {
    // const programLength = (data.end - data.start) / 60 / 1000; //mintues
    const startDate = moment(data.start);
    const endDate = moment(data.end);

    const startStr = startDate.format('hh:mm');
    const endStr = endDate.format('hh:mm');

    // console.log('start-datE', startDate.format('YYYY/MM/d'))
    // const programLength = (data.end - data.start) / 1000 / 60;

    const duration = moment.duration(endDate.diff(startDate));
    // const programLength = (data.end - data.start) / 60 / 1000; //mintues
    // var duration = (end - start) / 1000 / 60;
    var mintues = duration.asMinutes();

   // const sDate = new Date(data.start);
   // const eDate = new Date(data.end);
   // const pl = (eDate - sDate) / 1000 / 60;

    // console.log('pl', mintues, pl);
    const elWidth = (HOUR_SIZE / 60) * mintues;

    const containerWidth = HOUR_SIZE * 24;
    const startMinutes = startDate.hours() * 60 + startDate.minutes();

    const position = containerWidth - ((HOUR_SIZE / 60) * startMinutes);
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
