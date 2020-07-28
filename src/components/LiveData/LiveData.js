import React from 'react';
import { Image, Row, Col } from "react-bootstrap";
import LazyLoad from 'react-lazyload';
import "./LiveData.scss";
import { Component } from 'react';

class LiveData extends Component {

	constructor(props) {
		super(props)
		this.state = {
			expanded: false,
		}
	}

	render() {
		const { LIVE_PROGRAM_DATA } = this.props;
		const { expanded } = this.state;
		const toggledClass = expanded ? 'expanded' : 'collapsed';

		return (
			<div className="contianer">
				<div className="live-contianer">
					<div className="header-image-continaner">
						<LazyLoad height={200} once >
							<Image src={LIVE_PROGRAM_DATA.images.icon} fluid />
						</LazyLoad>
						<span className="live-text">
							<span className="dot"></span>
						LIVE
				</span>
					</div>
					<div className="live-content-title">
						<Row>
							<Col xs={2}>
								<div className="channel-title">
									<LazyLoad height={200} once >
										<Image src={LIVE_PROGRAM_DATA.channelImages.logo} fluid />
									</LazyLoad>
								</div>
							</Col>
							<Col xs={10}>
								<div className="Program-details-section">
									<h3>Comedy Central</h3>
									<h1>{LIVE_PROGRAM_DATA.title}</h1>
									<div className="show-details">
										<span>{LIVE_PROGRAM_DATA.meta.year}</span>
										{
											LIVE_PROGRAM_DATA.meta.genres.map(data =>
												<span key={data}>{data}</span>
											)
										}
									</div>
								</div>
							</Col>
						</Row>

					</div>
					<div className="row">
						<div className="col-xs-12">
							<div className="live-content-detials">
								<p className={`content ${toggledClass}`}>{LIVE_PROGRAM_DATA.description}</p>
								<span className="view-more-less" onClick={() => this.setState({ expanded: !expanded })}>
									{expanded ? 'Less' : 'More'}
								</span>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-xs-12">
							<div className="live-content-cast-detials">
								<div className="cast-detials">
									Cast :{
										LIVE_PROGRAM_DATA.meta.cast.map(cast =>
											<span key={cast.name}>{cast.name}</span>
										)
									}
								</div>
								<div className="creators-detials">
									Creators :
									{
										LIVE_PROGRAM_DATA.meta.creators.map
											(
												(creator) =>
													<span key={creator.name}>
														{creator.name}
													</span>
											)}
								</div>
							</div>
							<br />
							<br />
							<br />
						</div>
					</div>


				</div>
			</div>

		);
	}
}






export default LiveData;