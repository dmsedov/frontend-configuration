import { createAction } from 'redux-actions';

// import {
//   LOGIN_REQUEST,
//   LOGIN_FAIL, //eslint-disable-line no-unused-vars
//   LOGIN_SUCCESS,
//   LOGOUT_SUCCESS
// } from '../constants/auth';
//
// import {
//   ROUTING
// } from '../constants/routing';

export const loginRequest = createAction('LOGIN_REQUEST');
export const loginSuccess = createAction('LOGIN_SUCCESS');
export const loginFailure = createAction('LOGIN_FAILURE');

export const logoutRequest = createAction('LOGOUT_REQUEST');
export const logoutSuccess = createAction('LOGOUT_SUCCESS');
export const logoutFailure = createAction('LOGOUT_FAILURE');

export const redirectToUrl = createAction('REDIRECT_TO_URL');

export const login = ({ payload: { name }}) => (dispatch) => {
  dispatch(loginRequest({}));

  setTimeout(() => {
    dispatch(loginSuccess({
      name,
      isAuthenticated: true,
    }));

    dispatch(redirectToUrl({
      method: 'replace',
      nextUrl: '/',
    }));
  }, 2000);
};

export const logout = () => removeSessionSuccess({});
