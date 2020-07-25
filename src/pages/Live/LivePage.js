		import React, { Component } from 'react';
		import "./LivePage.scss";
		import SpinnerPage from "../../components/Loader/spinloader";
	
		class LivePage extends Component {
			
			render() {

				return (
					<div style={{ textAlign: "center" }}>
					<SpinnerPage></SpinnerPage>			
					</div>
				
				);
			}
		}

		export default LivePage;