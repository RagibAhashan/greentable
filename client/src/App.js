import React from 'react';
import './App.css';
import HomePage from './components/home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './pages/loginPage'
import RegisterRestaurant from './pages/registerRestaurant';
import DeliveryDriverRegister from './pages/deliveryDriverRegister';
import RestaurantGetStarted from './pages/restaurantGetStarted'
import OrderFood from './pages/orderFood';

const App = () => {
  return (
      <Router>
        <Switch>
          <Route path='/' exact component={HomePage}/>
          <Route path='/login' component={LoginPage}/>
          <Route path='/register-restaurant' component={RegisterRestaurant}/>
          <Route path='/restaurant/get-started/:loginEmail' name='loginEmail' component={RestaurantGetStarted}/>
          <Route path='/register-partner' component={DeliveryDriverRegister}/>

          <Route path='/order-food' component={OrderFood}/>
        
        </Switch>
      </Router>
  );
}

export default App;
