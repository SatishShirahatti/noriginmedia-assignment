import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import HomePage from "./pages/Home/HomePage";
import ListPage from "./pages/List/ListPage";
import LivePage from "./pages/Live/LivePage";
import LocalPage from "./pages/Local/LocalPage";
import ReplayPage from "./pages/Replay/ReplayPage";

import history from './history';

export default class Routes extends Component {
	
	render() {
		return (
			<Router history={history}>	
				<Switch>
					<Route path="/" exact  component={ListPage} />
					<Route path="/Home" component={HomePage} />
					<Route path="/Live" component={LivePage} />
					<Route path="/Local" component={LocalPage} />
					<Route path="/Replay" component={ReplayPage} />
				</Switch>
			</Router>
		)
	}
}