	import React ,{ Component }  from 'react';
	import './BottomBar.scss';
	import Icon from "./icons";
	import history from '../../history';

	class BottomBar extends Component{

		constructor() {
			super();
			this.state = {
				activeId: 2,
				links: [
					{
						id: 1,
						name: "Home",
						to: "/Home",
						className: "active"
					},
					{
						id: 2,
						name: "Live",
						to: "/Live",
						className: "active"
					},
					{
						id: 3,
						name: "List",
						to: "/",
						className: "active"
					},
					{
						id: 4,
						name: "Replay",
						to: "/Replay",
						className: "active"
					}, {
						id: 5,
						name: "Local",
						to: "/Local",
						className: "active"
					}
				]
			}
				this.setActiveElement = this.setActiveElement.bind(this);
		}
		setActiveElement(id,btnval) {
			this.setState({ activeId: id })
			history.push(btnval.to);
		
		}

	render(){
		const { links} = this.state;
		return (

			<div className="bottomcontainer container-fluid">
				<div className="row">
					<div className="col-2 d-none d-md-block">
						</div>
					<div className="col-sm-12 col-md-8 col-xs-12">
						<div className="bottom-content-container">
						{
					links.map((btnval,index)=>
						<button key={index} to={btnval.to} type="button" 
						className={ index === this.state.activeId ? "btn active" : "btn"}
						onClick={() => { this.setActiveElement(index,btnval) }}
						value={btnval.name}>
							<div className="btn-content">
								<Icon name={btnval.name} width={100}  />
								<p>{btnval.name}</p>
							</div>
						</button>
					)
						}
						</div>
					</div>
					<div className="col-2 d-none d-md-block">
						</div>
				</div>
			</div>


		)
	}
	}


	export default BottomBar;