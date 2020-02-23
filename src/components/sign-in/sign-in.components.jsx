import React, { Component } from "react";

import "./sign-in.styles.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-bubtton.component";

import { signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends Component {
	state = {
		email: "",
		password: ""
	};

	handleSubmit = e => {
		e.preventDefault();

		this.setState({
			email: "",
			password: ""
		});
	};

	handleChange = e => {
		const { name, value } = e.target;

		this.setState({ [name]: value });
	};

	render() {
		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>
				<form>
					<FormInput
						name="email"
						value={this.state.email}
						type="email"
						handleChange={this.handleChange}
						required
						label="Email"
					/>
					<FormInput
						name="password"
						value={this.state.password}
						type="password"
						handleChange={this.handleChange}
						required
						label="Password"
					/>
					<div className="buttons">
						<CustomButton type="submit">Sign in</CustomButton>
						<CustomButton onClick={signInWithGoogle} isGoogleSignIn>
							Sign in with Google
						</CustomButton>
					</div>
				</form>
			</div>
		);
	}
}

export default SignIn;
