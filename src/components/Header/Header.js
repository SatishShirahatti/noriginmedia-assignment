import React from 'react';
import './Header.scss';
import { Navbar } from 'react-bootstrap';
import Noriginlogo from '../../assets/images/logo.png';
import history from '../../history';
import { Component } from 'react';


class Header extends Component {

	goToHome() {
		history.push("/");
	}
	render() {
		return (
			<div className="nav-container">
				<Navbar>
					<Navbar.Brand style={{ width: '100%' }}>
						<div className="content">
							<div className="person-contianer">
								<svg
									width="2em"
									height="2em"
									color="#fff"
									viewBox="0 0 16 16"
									className="bi bi-file-person"
									fill="currentColor"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										d="M4 1h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H4z"
									/>
									<path d="M13.784 14c-.497-1.27-1.988-3-5.784-3s-5.287 1.73-5.784 3h11.568z" />
									<path
										fillRule="evenodd"
										d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
									/>
								</svg>
							</div>
							<nav className="logo-contianer">
								<a href="/" onClick={this.goToHome}><img src={Noriginlogo} alt="logo" />
								</a>
							</nav>

							<div className="search-contianer">
								<svg
									width="1em"
									height="1em"
									viewBox="0 0 16 16"
									className="bi bi-search"
									fill="currentColor"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fillRule="evenodd"
										d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"
									/>
									<path
										fillRule="evenodd"
										d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"
									/>
								</svg>
							</div>
						</div>
					</Navbar.Brand>
				</Navbar>
			</div>
		);
	}

}


export default Header;
