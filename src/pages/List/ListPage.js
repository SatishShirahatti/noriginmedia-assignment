import React, { Component } from 'react';
import moment from "moment";
//import LiveComponent from "../Live/LivePage";
import TimelineContainer from "../../components/Timeline/Timeline"
import "./ListPage.scss"

class ListPage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			showComponent: true, // current made true always
			CurrentDate: moment(new Date()).format('ddd DD MM'),
			color: "",
			interval:null
		}
		this._onDayButtonClick = this._onDayButtonClick.bind(this);
	}
	
	componentDidMount() {
		this.interval = setInterval(this.handleCurrentTime, 6000);
		//this.handleCurrentTime();
		  // scroll on page load 
	}
	componentWillUnmount() {
		clearInterval(this.interval);
	}
	_onDayButtonClick() {  // current doesnt do anything
		this.setState({
			showComponent: true,
		});

	}
	
	handleCurrentTime = () => {
		const anchor = document.querySelector('.activeTime');
		//console.log("time1", this.interval) 
		anchor.scrollIntoView({ behavior: 'smooth', block: 'center', inline: "center" })
	}
	toggleStartColor = (event) => {
		var newColor = this.state.color === '' ? '#E8A61D' : '';
		console.log("color", newColor)
		this.setState({ color: newColor })
	}
	render() {
		const { CurrentDate } = this.state;

		let listOfDays = [];
		const today = moment().startOf('day');
		//start at -5, adding a negative number of days is the same as subtracting
		for (let dayDifference = -10; dayDifference <= 10; dayDifference++) {
			const newDay = moment(today).add(dayDifference, 'days');
			let day = [];
			day = moment(newDay).format('ddd DD MM');
			//	console.log("days",day)
			listOfDays.push(day);

			let todaydate = new Date();
			todaydate = moment(todaydate).format('DD MM');

		}
		return (
			<div className="list-container">
				<div className="md-daylist">
					<button style={{ color: this.state.color }} className="StarBtn" onClick={this.toggleStartColor}>
						<svg style={{ color: this.state.color }} width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-star" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.523-3.356c.329-.314.158-.888-.283-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767l-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288l1.847-3.658 1.846 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.564.564 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
						</svg>
					</button>
					<div>{listOfDays.map((day, index) => (
						<button onClick={this._onDayButtonClick}
							className={CurrentDate === day ? "daylist-line activeDay" : "daylist-line"}
							value={day} key={index}>
							<span>{day.substr(0, 3)}</span>
							<p>{day.substr(4)}</p>
						</button>

					))}</div>
					<TimelineContainer />
					{/*showComponent ?
							<LiveComponent currentTime={this.currentTime} /> :
							null
						*/}
				</div>
				<button onClick={this.handleCurrentTime} className="btn current-Show">Now</button>
			</div>

		);
	}
}

export default ListPage;