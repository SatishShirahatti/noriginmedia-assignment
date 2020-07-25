import React, { Component } from 'react';
import SpinnerPage from "../../components/Loader/spinloader";

class HomePage extends Component {
	render() {
		return (
				<div className="application-container">
				<div style={{ textAlign: "center" }}>
					<SpinnerPage></SpinnerPage>
				</div>
				</div>
		);
	}
}

export default HomePage;