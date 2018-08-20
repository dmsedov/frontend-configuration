import { createAction } from 'redux-actions';

import {
  LOGIN_REQUEST,
  LOGIN_FAIL, //eslint-disable-line no-unused-vars
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS
} from '../constants/auth';

import {
  ROUTING
} from '../constants/routing';

export const fetchLoginRequest = createAction('LOGIN_FETCH_REQUEST');
export const fetchLoginSuccess = createAction('LOGIN_FETCH_SUCCESS');
export const fetchLoginFailed = createAction('LOGIN_FETCH_FAILURE');

export const removeSessionRequest = createAction('LOGOUT_FETCH_REQUEST');
export const removeSessionSuccess = createAction('LOGOUT_FETCH_SUCCESS');
export const removeSessionFailed = createAction('LOGOUT_FETCH_FAILURE');


export const login = (payload) => (dispatch) => {
  dispatch(fetchLoginRequest({}));

  setTimeout(() => {
    dispatch(fetchLoginSuccess(
      payload: {
        name: payload.name,
        isAuthenticated: true,
    }));

    dispatch(routeTo(
      payload: {
        method: 'replace',
        nextUrl: '/',
      }));
  }, 2000);
};

export const logout = () => removeSessionSuccess({});
