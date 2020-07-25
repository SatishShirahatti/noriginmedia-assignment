import React, { Component } from 'react';
import SpinnerPage from "../../components/Loader/spinloader";
//import moment from "moment";

class ReplayPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			timeLineTop: 75,
			links: [
				{
					id: 1,
					name: "Link1",
					to: "/cms",
					className: "side_nav_item"
				},
				{
					id: 2,
					name: "Link2",
					to: "/cms",
					className: "side_nav_item"
				},
				{
					id: 3,
					name: "Link3",
					to: "/cms",
					className: "side_nav_item"
				},
				{
					id: 4,
					name: "Link4",
					to: "/cms",
					className: "side_nav_item"
				}
			],
			activeLink: null
		};
	}
// componentDidMount(){
// 	setInterval(() => {
// 		let d = new Date();
// 		let result = d.getHours() + d.getMinutes() / (60);
// 		this.setState({
// 			timeLineTop: result+1
// 		})
// 	}, 500);
// }
// componentWillUnmount(){
// 	clearInterval();
// }
	handleClick = id => {
		this.setState({ activeLink: id });
	};

	render() {

		const { links, activeLink} = this.state;

		return (
			<div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
				<div>
					<SpinnerPage></SpinnerPage>	
					<h2>ReplayPage</h2>
					{links.map(link => {
						return (
							<div key={link.id}>
								<ul>
									<li
										onClick={() => this.handleClick(link.id)}
										className={
											link.className +
											(link.id === activeLink ? " active_item" : "")
										}
									>
										{link.name} {link.id === activeLink && "active!"}
									</li>
								</ul>
							</div>
						);
					})}
				</div>
				
			</div>
		);
	}
}

export default ReplayPage;