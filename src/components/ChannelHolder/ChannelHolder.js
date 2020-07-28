import React from 'react';
import ChannelProgram from '../Channel/Channel';
import './ChannelHolder.scss';
import { useEffect, useState } from 'react';
import { API_URL } from "../../common/constants";

function ChannelHolder() {

	const [channels, setChannels] = useState([]);
	useEffect(() => {
		loadChannelData();
	}, []);

	const loadChannelData = async () => {
		const response = await fetch(API_URL);
		const data = await response.json();
		setChannels(data);
	};

	return (
		<div className="channel-holder">
			{channels && channels.map((channel) => {
				const { id, title, schedules } = channel;
				return (
					<div key={id} className="channel">
						<div className="channel-logo" value={title}>
							<span>{id.substr(0, 3)}</span>
						</div>
						<ChannelProgram schedules={schedules} />
					</div>
				);
			})}
		</div>
	);
}

export default ChannelHolder;
