import React, { Component } from "react";

import "./sign-up.styles.scss";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-bubtton.component";

import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

class SignUp extends Component {
	state = {
		displayName: "",
		email: "",
		password: "",
		confirmPassword: ""
	};

	handleSubmit = async e => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    if(password !== confirmPassword) {
      alert('Password don\'t match');
      return;
    }
    try {
        const{ user } = await auth.createUserWithEmailAndPassword(email, password);

        createUserProfileDocument(user, { displayName })

        this.setState({
					displayName: "",
					email: "",
					password: "",
					confirmPassword: ""
				});

    }catch(error) {
      console.log(error)
    }
  };
  
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({[name]: value})
  }

	render() {
		return (
			<div className="sign-up">
				<h2 className="title">I do not have an account</h2>
				<span>Sign up your email and password</span>
				<form className="sign-up-form" onSubmit={this.handleSubmit}>
					<FormInput
						type="text"
						name="displayName"
						value={this.state.displayName}
						onChange={this.handleChange}
						label="Display Name"
					/>
					<FormInput
						type="email"
						name="email"
						value={this.state.email}
						onChange={this.handleChange}
						label="Email"
						required
					/>
					<FormInput
						type="password"
						name="password"
						value={this.state.password}
						onChange={this.handleChange}
						label="Password"
						required
					/>
					<FormInput
						type="password"
						name="confirmPassword"
						value={this.state.confirmPassword}
						onChange={this.handleChange}
						label="Confirm Password"
						required
					/>
					<CustomButton type="submit">Sign Up</CustomButton>
				</form>
			</div>
		);
	}
}

export default SignUp;