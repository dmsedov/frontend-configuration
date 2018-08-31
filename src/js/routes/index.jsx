import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PrivateRoutes from '../components/PrivateRoutes';
import LoginPage from '../containers/LoginPage';
import Calendar from '../containers/Calendar';
import NotFoundPage from '../components/NotFoundPage';

const Footer = () => {
    return (
      <footer style={{ backgroundColor: 'green' }}>
        <div>Content</div>
      </footer>
    );
}

const CalendarRoute = (<Route exact path="/" component={Calendar} />);
const footer = (<Route exact path="/footer" component={Footer} />);

export default (
  <Switch>
    <Route exact path="/login" component={LoginPage} />
    {PrivateRoutes({ component: [CalendarRoute, footer] })}
    <Route component={NotFoundPage} />
  </Switch>
);
