import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.components';
import ShopPage from './pages/shop/shop.component';

const App = () => {
  return (
    <Switch>
      <Route path='/shop' exact component={ShopPage} />
      <Route path='/' exact component={HomePage} />
    </Switch>
  );
}

export default App;
