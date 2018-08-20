import React from 'react';
import { Route, IndexRoute, Switch } from 'react-router';
import App from '../components/App';
import authenticatedComponent from '../containers/authenticatedComponent';
import LoginPage from '../containers/LoginPage';
import Calendar from '../containers/Calendar';
import NotFoundPage from '../components/NotFoundPage';

export default (
  <Switch>
    <Route path="/" component={App}>
      <IndexRoute component={authenticatedComponent(Calendar)} />
      <Route exact path="login" component={LoginPage} />
    </Route>
    <Route path="*" component={NotFoundPage} />
  </Switch>
);
