import React from "react";

import Home from "./home";
import List from "./list";
import Live from "./live";
import Local from "./local";
import Replay from "./replay";

const Icon = props => {
	switch (props.name) {
		case "List":
			return <List {...props} />;
		case "Home":
			return <Home {...props} />;
		case "Live":
			return <Live {...props} />;
		case "Local":
			return <Local {...props} />;
		case "Replay":
			return <Replay {...props} />;
		default:
			return;
	}
};

export default Icon;