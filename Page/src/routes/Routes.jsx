import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import Home from '../pages/home';
import MainLayout from '../layouts/MainLayout';
import NewPoll from '../pages/newPoll';
import SignUp from '../pages/signup';

const Routes = () => (
  <Router>
    <MainLayout>
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/new">
          <NewPoll/>
        </Route>
        <Route exact path="/signup">
          <SignUp/>
        </Route>
      </Switch>
    </MainLayout>
  </Router>
);

export default Routes;
