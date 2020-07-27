import React from "react";
import "./spinloader.scss";

const SpinnerPage = () => {
	return (
    <>
      <div className="spinner-grow text-primary" role="status">
      </div>
      <div className="spinner-grow text-success" role="status">
      </div>
      <div className="spinner-grow text-danger" role="status">
      </div>
      <div className="spinner-grow text-warning" role="status">
      </div>
      <div className="spinner-grow text-info" role="status">
	  </div>
	<h3>Coming Soon</h3>
    </>
		
	);
}

export default SpinnerPage;