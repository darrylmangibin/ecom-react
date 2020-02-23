import React, { Fragment, Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage/homepage.components";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth } from "./firebase/firebase.utils";

class App extends Component {
	state = {
		currentUser: null
	};

	unsubscribeFromAuth = null;

	componentDidMount() {
		this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
			this.setState({ currentUser: user });
		});
	}

	componentWillUnmount() {
		this.unsubscribeFromAuth();
	}

	render() {
		return (
			<Fragment>
				<Header currentUser={this.state.currentUser} />
				<Switch>
					<Route path="/shop" exact component={ShopPage} />
					<Route path="/signin" exact component={SignInAndSignUpPage} />
					<Route path="/" exact component={HomePage} />
				</Switch>
			</Fragment>
		);
	}
}

export default App;
