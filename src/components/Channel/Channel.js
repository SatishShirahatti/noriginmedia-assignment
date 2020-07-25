import React from 'react';
import Program from './Program/Program';
import './Channel.scss';

function Channel({schedules}) {
    return (
        <div className="channel-program">
            {
                schedules.map(schedule => <Program data={schedule} />)
            }
        </div>
    );
}

export default Channel;
