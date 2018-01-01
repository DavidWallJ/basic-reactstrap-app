import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
	render() {
		return (
			<nav class="navbar navbar-expand-sm navbar-light bg-light mb-3">
				<div class="container">
					<a class="navbar-brand" href="#">
						Navbar
					</a>
					<button
						class="navbar-toggler"
						data-toggle="collapse"
						data-target="#navbarNav"
					>
						<span class="navbar-toggler-icon" />
					</button>
					<div class="collapse navbar-collapse" id="navbarNav">
						<ul class="navbar-nav">
							<li class="nav-item">
								<a class="nav-link" href="#">
									Home
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">
									About
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">
									Services
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">
									Contact
								</a>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default App;
