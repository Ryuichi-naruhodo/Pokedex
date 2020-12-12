import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './Home';
import PageDetails from './PageDetails';
import Navbar from '../components/Navbar';
import PageError from './PageError';

const App = () => (

  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/page-details/:id" component={PageDetails} />
      <Route component={PageError} />
    </Switch>
  </Router>

);

export default App;
