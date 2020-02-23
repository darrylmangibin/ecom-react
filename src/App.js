import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.components';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';

const App = () => {
  return (
		<Fragment>
      <Header />
			<Switch>
				<Route path="/shop" exact component={ShopPage} />
				<Route path="/" exact component={HomePage} />
			</Switch>
		</Fragment>
	);
}

export default App;
