import React from 'react';
import './App.css';
import HomePage from './components/home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './pages/loginPage'
import RegisterRestaurant from './pages/registerRestaurant';

function App() {
  return (
      <Router>
        <Switch>
          <Route path='/' exact component={HomePage}/>
          <Route path='/login' component={LoginPage}/>
          <Route path='/register-restaurant' component={RegisterRestaurant}/>
        </Switch>
      </Router>
  );
}

export default App;
