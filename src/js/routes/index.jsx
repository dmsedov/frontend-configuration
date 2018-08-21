import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from '../containers/LoginPage';
import Calendar from '../containers/Calendar';
import NotFoundPage from '../components/NotFoundPage';

export default (
  <Switch>
    <Route exact path="/" component={Calendar} />
    <Route exact path="/login" component={LoginPage} />
    <Route component={NotFoundPage} />
  </Switch>
);
