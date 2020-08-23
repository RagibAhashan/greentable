import React, { useState, useEffect } from 'react';
import './App.css';
import HomePage from './components/home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './pages/loginPage'
import UserSignUp from './pages/UserSignUp'
import RegisterRestaurant from './pages/registerRestaurant';
import RestaurantGetStarted from './pages/restaurantGetStarted'
import OrderFood from './pages/orderFood';
import UserGetStarted from './pages/userGetStarted';
import CheckoutOrder from './components/OrderComponents/checkoutOrder';
import Pricing from './components/OrderComponents/pricing'

const withProps = (Component, props) => {
  return function(matchProps) {
    return <Component {...props} {...matchProps} />
  }
}

const App = () => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    console.log('isLoggedIn', isLoggedIn)
  }, [isLoggedIn])

  return (
      <Router>
        <Switch>
          <Route path='/' exact component={HomePage}/>
          <Route path='/login' component={LoginPage}/>
          <Route path='/sign-up-client' component={UserSignUp}/>

          <Route path='/register-restaurant' component={RegisterRestaurant}/>
          <Route path='/restaurant/get-started/:loginEmail' name='loginEmail' component={RestaurantGetStarted}/>
          <Route path='/user/get-started/:loginEmail' name='loginEmail' component={UserGetStarted}/>

          <Route path='/order-food' component={OrderFood}/>
          <Route path='/pricing' component={Pricing}/> 
          <Route path='/checkout' isLoggedIn={isLoggedIn} component={withProps(CheckoutOrder, { isLoggedIn: isLoggedIn })} />

        </Switch>
      </Router>
  );
}

export default App;
