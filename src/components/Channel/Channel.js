import React from 'react';
import Program from './Program/Program';
import './Channel.scss';

function Channel({schedules}) {
	
	schedules.sort((a, b) => b.start - a.start);
    return (
        <div className="channel-program">
            {
				schedules.map((schedule,index) => <Program data={schedule} key={index} />)
            }
        </div>
    );
}

export default Channel;
