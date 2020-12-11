import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './Home';
import PageDetails from './PageDetails';
import Navbar from '../components/Navbar';

const App = () => (

  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/page-details/:id">
        <PageDetails />
      </Route>
    </Switch>
  </Router>

);

export default App;
