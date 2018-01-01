import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink
} from 'reactstrap';

class Navigation extends Component {
	constructor(props) {
		super(props);

		this.toggleNavbar = this.toggleNavbar.bind(this);
		this.state = {
			collapsed: true
		};
	}

	toggleNavbar() {
		this.setState({
			collapsed: !this.state.collapsed
		});
	}

	render() {
		return (
			<div>
				<Navbar expand="sm" color="faded" className="navbar-dark bg-dark mb-3">
					<NavbarBrand href="/">React Strap Nav</NavbarBrand>
					<NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
					<Collapse isOpen={!this.state.collapsed} navbar>
						<Nav navbar className="ml-auto">
							<NavItem>
								<NavLink>
									<Link to={'/'}>Landing</Link>
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink>
									<Link to={'/reactform'}>ReduxForm</Link>
								</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</div>
		);
	}
}

export default Navigation;
