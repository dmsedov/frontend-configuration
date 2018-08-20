import { handleActions } from 'redux-actions';
import * as actions from '../actions/authActions';

const initialState = JSON.parse(window.localStorage.getItem('rr_user')) || {};


export const fetchLoginRequest = createAction('LOGIN_FETCH_REQUEST');
export const fetchLoginSuccess = createAction('LOGIN_FETCH_SUCCESS');
export const fetchLoginFailed = createAction('LOGIN_FETCH_FAILURE');

export const removeSessionRequest = createAction('LOGOUT_FETCH_REQUEST');
export const removeSessionSuccess = createAction('LOGOUT_FETCH_SUCCESS');
export const removeSessionFailed = createAction('LOGOUT_FETCH_FAILURE');

const userCreatingState = handleActions({
  [actions.fetchLoginRequest](state, { payload }) {
    return state;
  },
  [actions.fetchLoginSuccess](state, { payload }) {
    return { ...state, name: payload.name, isAuthenticated: payload.isAuthenticated };
  },
  [actions.fetchLoginFailed](state, { payload }) {
    return state;
  },
  [removeSessionSuccess](state, { payload }) {
    return state;
  },
}, initialState);

export { userCreatingState };
