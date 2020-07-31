import React from 'react';
import { Image, Row, Col } from "react-bootstrap";
import LazyLoad from 'react-lazyload';
import "./FutureData.scss";
import { Component } from 'react';

class FutureData extends Component {

	constructor(props) {
		super(props)
		this.state = {
			expanded: false,
			currentIndexEpisode : 0,
		}
	}

	handleSeriesData = (clickedIndex) =>{
		const { currentIndexEpisode} = this.state;
		if (clickedIndex !== currentIndexEpisode) {
			this.setState({ currentIndexEpisode: clickedIndex });
		}
	}

	render() {
		const { FUTURE_PROGRAM_DATA } = this.props;
		const { expanded, currentIndexEpisode } = this.state;
		const toggledClass = expanded ? 'expanded' : 'collapsed';
	//	console.log("FUTURE_PROGRAM_DATA", FUTURE_PROGRAM_DATA)
		return (
			<div className="contianer">
				<div className="future-contianer">
					<div className="header-image-continaner">
						<LazyLoad height={200} once >
							<Image src={FUTURE_PROGRAM_DATA.images.icon} fluid />
						</LazyLoad>
					</div>
					<div className="future-content-title">
						<Row>
							<Col xs={2}>
								<div className="channel-title">
									<LazyLoad height={200} once >
										<Image src={FUTURE_PROGRAM_DATA.channelImages.logo} fluid />
									</LazyLoad>
								</div>
							</Col>
							<Col xs={10}>
								<div className="Program-details-section">
									<p>
										<span className="title">Comedy Central</span>
										<span>14:30 - 17:00</span>
										<span> 3 May</span>
									</p>
									<h1>{FUTURE_PROGRAM_DATA.title}</h1>
									<div className="show-details">
										<span>{FUTURE_PROGRAM_DATA.meta.year}</span>
										{
											FUTURE_PROGRAM_DATA.meta.genres.map(data =>
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
								<p className={`content ${toggledClass}`}>{FUTURE_PROGRAM_DATA.description}</p>
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
										FUTURE_PROGRAM_DATA.meta.cast.map(cast =>
											<span key={cast.name}>{cast.name}</span>
										)
									}
								</div>
								<div className="creators-detials">
									Creators :
									{
										FUTURE_PROGRAM_DATA.meta.creators.map
											(
												(creator) =>
													<span key={creator.name}>
														{creator.name}
													</span>
											)}
								</div>
							</div>
						</div>
					</div>
					<div>

						<div className="series-button">
							{FUTURE_PROGRAM_DATA.series.map((seriesbutton, clickedIndex) =>
								<button key={seriesbutton.title} 
									onClick={() => this.handleSeriesData(clickedIndex)}>{seriesbutton.title}</button>
							)
							}
							<div>
								{FUTURE_PROGRAM_DATA.series[currentIndexEpisode].episodes.map((e,i)=>
									(<div key={i}>
										{e.title}
										</div>
										)
									)}
							</div>
						</div>
						<br />
						<br />
						<br />
					</div>
				</div>
			</div>

		);
	}
}






export default FutureData;