import React from 'react';
import './App.css';
import HomePage from './components/home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from './pages/loginPage'

function App() {
  return (
      <Router>
        <Switch>
          <Route path='/' exact component={HomePage}/>
          <Route path='/login' component={LoginPage}/>
        </Switch>
      </Router>
  );
}

export default App;
