import React, { Component } from 'react';
import SpinnerPage from "../../components/Loader/spinloader";
//import moment from "moment";

class ReplayPage extends Component {


	render() {


		return (
			<div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
				<div>
					<SpinnerPage></SpinnerPage>	
				</div>
				
			</div>
		);
	}
}

export default ReplayPage;