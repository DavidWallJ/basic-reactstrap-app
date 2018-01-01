import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import './App.css';

import Navigation from './components/Nav.js';
import Landing from './components/Landing.js';
import ReactForm from './components/ReactForm';

class App extends Component {
	render() {
		return (
			<div className="App">
				<BrowserRouter>
					<div>
						<Route path="/" component={Navigation} />
						<Switch>
							<Route exact path="/" component={Landing} />
							<Route path="/reactform" component={ReactForm} />
						</Switch>
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
