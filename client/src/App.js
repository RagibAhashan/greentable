import React, { useState, useEffect } from 'react';
import './App.css';
import HomePage from './components/home';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import LoginPage from './pages/loginPage';
import UserSignUp from './pages/UserSignUp';
import RegisterRestaurant from './pages/registerRestaurant';
import RestaurantGetStarted from './pages/restaurantGetStarted';
import OrderFood from './pages/orderFood';
import UserGetStarted from './pages/userGetStarted';
import CheckoutOrder from './components/OrderComponents/checkoutOrder';
import Pricing from './components/OrderComponents/pricing';
import DashBoard from './pages/LoggedInDash/dashBoard';

const withProps = (Component, props) => {
  return function(matchProps) {
    return <Component {...props} {...matchProps} />
  }
}

const App = () => {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [meals, setMeals] = useState(undefined);
  const [schedule, setSchedute] = useState(undefined);

  useEffect(() => {
    console.log('isLoggedIn', isLoggedIn);
    console.log('Meals', meals);
    console.log('schedule', schedule)
  }, [isLoggedIn, meals, schedule])

  return (
      <Router>
        <Switch>
          <Route path='/' exact component={HomePage}/>
          
          
          
          <Route path='/login' component={() => <LoginPage setIsLoggedIn={setIsLoggedIn}/>}/>
          <Route path='/sign-up-client' component={UserSignUp}/>

          <Route path='/register-restaurant' component={RegisterRestaurant}/>
          <Route path='/restaurant/get-started/:loginEmail' name='loginEmail' component={RestaurantGetStarted}/>
          <Route path='/user/get-started/:loginEmail' name='loginEmail' component={UserGetStarted}/>

          <Route path='/order-food' component={
            () => <OrderFood schedule={schedule} setSchedute={setSchedute} meals={meals} setMeals={setMeals} />
            }/>
          <Route path='/pricing' component={Pricing}/>
          
          {meals ? 
          <Route path='/checkout' isLoggedIn={isLoggedIn} 
          component={() => <CheckoutOrder 
            isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}
            schedule={schedule} setSchedute={setSchedute} meals={meals} setMeals={setMeals}
            />}
            />
          : <Redirect to='/'  />}

          {!isLoggedIn ?
            <Route path='/menu' component={DashBoard}/>
            :
            <Redirect to='/'  />
          }

        </Switch>
      </Router>
  );
}

export default App;
