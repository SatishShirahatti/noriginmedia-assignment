import React from 'react';
import Program from './Program/Program';
import './Channel.scss';


function Channel({schedules}) {
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
