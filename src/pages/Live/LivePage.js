		import React, { Component } from 'react';
		import "./LivePage.scss";
		import LiveData from "../../components/LiveData/LiveData";
		import LIVE_PROGRAM_DATA from "../../common/API/programdata/program_live";
	
		class LivePage extends Component {
			
			render() {

				return (
					<div style={{ textAlign: "center" }}>
						<LiveData LIVE_PROGRAM_DATA={LIVE_PROGRAM_DATA}/>		
					</div>
				
				);
			}
		}

		export default LivePage;