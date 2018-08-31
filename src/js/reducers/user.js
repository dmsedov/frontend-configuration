import { handleActions } from 'redux-actions';
import * as actions from '../actions/auth';

const sessionData = JSON.parse(window.localStorage.getItem('rr_user'));
const defaultState = { name: null, isAuthenticated: false };
const initialState = sessionData || defaultState;


const user = handleActions({
  [actions.loginRequest](state, { payload }) {
    return state;
  },
  [actions.loginSuccess](state, { payload: { isAuthenticated } }) {
    return { ...state, isAuthenticated };
  },
  [actions.loginFailure](state, { payload }) {
    return state;
  },
  [actions.logoutRequest](state, { payload }) {
    return state;
  },
  [actions.logoutSuccess](state, { payload }) {
    return state;
  },
  [actions.logoutFailure](state, { payload }) {
    return state;
  },
}, initialState);

export default user;
