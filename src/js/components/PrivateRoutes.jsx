import React from 'react';
import { Redirect } from 'react-router-dom';

const PrivateRoutes = ({ component: Component }) => {
  console.log(localStorage.getItem('user'), 'user info');
  return (localStorage.getItem('user')
    ? Component
    : <Redirect to="/login" />);
};

export default PrivateRoutes;
