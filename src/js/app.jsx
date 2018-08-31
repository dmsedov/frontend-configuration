import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import routes from './routes';
import createStore from './store';
import rootReducer from './reducers';
import { loginSuccess } from './actions/auth';

// console.log(Router, 'ROuter');

const store = createStore(rootReducer);
if (localStorage.getItem('user')) {
  store.dispatch(loginSuccess({ isAuthenticated: true }))
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      {routes}
    </BrowserRouter>
  </Provider>,
  document.getElementById('container'),
);
