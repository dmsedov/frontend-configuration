import { createAction } from 'redux-actions';

export const loginRequest = createAction('LOGIN_REQUEST');
export const loginSuccess = createAction('LOGIN_SUCCESS');
export const loginFailure = createAction('LOGIN_FAILURE');

export const logoutRequest = createAction('LOGOUT_REQUEST');
export const logoutSuccess = createAction('LOGOUT_SUCCESS');
export const logoutFailure = createAction('LOGOUT_FAILURE');

export const redirectToUrl = createAction('REDIRECT_TO_URL');

export const login = ({ name, history }) => (dispatch) => {
  // dispatch(loginRequest({}));
  localStorage.setItem('user', name);
  history.replace('/');
  dispatch(loginSuccess({ isAuthenticated: true }));
  // setTimeout(() => {
  //
  // }, 2000);
};

// export const logout = () => removeSessionSuccess({});
