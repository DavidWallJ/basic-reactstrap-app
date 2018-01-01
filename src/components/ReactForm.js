import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class ReactForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			select: 1,
			textArea: '',
			radioButton: null
		};
	}

	handleEmailChange(e) {
		console.log(e.target.value);
		this.setState({ email: e.target.value });
	}

	handlePasswordChange(e) {
		console.log(e.target.value);
		this.setState({ password: e.target.value });
	}

	handleSelectChange(e) {
		console.log(e.target.value);
		this.setState({ select: e.target.value });
	}

	handleTextAreaChange(e) {
		console.log(e.target.value);
		this.setState({ textArea: e.target.value });
	}

	handleRadioButtonChange(e) {
		console.log(e.target.value);
		this.setState({ radioButton: e.target.value });
	}

	render() {
		return (
			<div>
				<h3 className="text-center">ReactForm Component</h3>

				<div className="row">
					<div className="col-md-6 m-auto">
						<Form onSubmit={this.handleSubmit}>
							<FormGroup>
								<Label for="exampleEmail">Email</Label>
								<Input
									value={this.state.email}
									onChange={this.handleEmailChange.bind(this)}
									type="email"
									name="email"
									id="exampleEmail"
									placeholder="with a placeholder"
								/>
							</FormGroup>
							<FormGroup>
								<Label for="examplePassword">Password</Label>
								<Input
									value={this.state.password}
									onChange={this.handlePasswordChange.bind(this)}
									type="password"
									name="password"
									id="examplePassword"
									placeholder="with a placeholder"
								/>
							</FormGroup>
							<FormGroup>
								<Label for="exampleSelect">Select</Label>
								<Input
									type="select"
									name="select"
									id="exampleSelect"
									value={this.state.select}
									onChange={this.handleSelectChange.bind(this)}
								>
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
									<option>5</option>
								</Input>
							</FormGroup>
							<FormGroup>
								<Label for="exampleText">Text Area</Label>
								<Input
									value={this.state.textArea}
									onChange={this.handleTextAreaChange.bind(this)}
									type="textarea"
									name="text"
									id="exampleText"
								/>
							</FormGroup>
							<FormGroup tag="fieldset">
								<legend>Radio Button</legend>
								<FormGroup
									check
									value={this.state.radioButton}
									onChange={this.handleRadioButtonChange.bind(this)}
								>
									<Label check>
										<Input type="radio" name="radio1" /> Option one is this and
										that—be sure to include why it's great
									</Label>
								</FormGroup>
							</FormGroup>

							<Button className="my-4" color="primary" size="lg" block>
								Submit
							</Button>
						</Form>
					</div>
				</div>
			</div>
		);
	}
}

export default ReactForm;
