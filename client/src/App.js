import React from 'react';
import './App.css';
import HomePage from './components/home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './pages/loginPage'
import UserSignUp from './pages/UserSignUp'
import RegisterRestaurant from './pages/registerRestaurant';
// import DeliveryDriverRegister from './pages/deliveryDriverRegister';
import RestaurantGetStarted from './pages/restaurantGetStarted'
import OrderFood from './pages/orderFood';
import UserGetStarted from './pages/userGetStarted';
import ConfirmOrders from './components/OrderComponents/confirmOrders'

const App = () => {
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
        
        </Switch>
      </Router>
  );
}

export default App;
