import React, { Component } from 'react';
import Timeline from "../../components/Customtimeline/Timeline";
import SpinnerPage from "../../components/Loader/spinloader";

const events = [
	{ ts: "2017-09-17T12:22:46.587Z", text: 'Logged in' },
	{ ts: "2017-09-17T12:21:46.587Z", text: 'Clicked Home Page' },
	{ ts: "2017-09-17T12:20:46.587Z", text: 'Edited Profile' },
	{ ts: "2017-09-16T12:22:46.587Z", text: 'Registred' },
	{ ts: "2017-09-16T12:21:46.587Z", text: 'Clicked Cart' },
	{ ts: "2017-09-16T12:20:46.587Z", text: 'Clicked Checkout' },
];

class LocalPage extends Component {
	render() {
		return (
			<div>
				<div style={{ textAlign: "center" }}>
					<SpinnerPage></SpinnerPage>
				</div>
				<Timeline items={events}><h2>LocalPage</h2></Timeline>
			</div>
		);
	}
}

export default LocalPage;