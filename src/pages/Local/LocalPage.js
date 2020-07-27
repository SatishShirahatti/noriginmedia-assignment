import React, { Component } from 'react';
import FutureData from "../../components/FutureData/FutureData";
import FUTURE_PROGRAM_DATA from "../../common/API/programdata/program_future";

class LocalPage extends Component {
	render() {
		return (
			<div>
				<div style={{ textAlign: "center" }}>
					<FutureData FUTURE_PROGRAM_DATA={FUTURE_PROGRAM_DATA} />
					</div>
			</div>
		);
	}
}

export default LocalPage;