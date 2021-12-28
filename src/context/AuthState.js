import React, { useReducer } from 'react';
import AuthContext from './auth-context';
import { SET_TOKEN, LOG_OUT, FETCH_CURRENT_USER } from './auth-actions';
import authReducer from './auth-reducer';

import { login } from '../utils/login';

export default function Provider({ children }) {
  const initialState = {
    user: [], // {name: 'John', email: '123@mail.com', password: '123'}
    isLoggedIn: false,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  const setTokensUserAndLogIn = (data) => {
    window.localStorage.setItem(
      'auth-token',
      JSON.stringify({
        token: data,
      })
    );

    dispatch({ type: SET_TOKEN, payload: data });
  };

  const logOutAndDeleteToken = () => {
    window.localStorage.removeItem('auth-token');
    dispatch({ type: LOG_OUT });
    window.location.reload();
    return;
  };

  const onLogIn = async () => {
    const userRes = await login();
    setTokensUserAndLogIn(userRes);
  };

  const onLogOut = () => {
    // const authTokens = JSON.parse(window.localStorage.getItem('auth-tokens'));
    // Delete the user using the token
    logOutAndDeleteToken();
  };

  const fetchCurrentUser = () => {
    const authToken = JSON.parse(window.localStorage.getItem('auth-token'));
    if (authToken) {
      dispatch({ type: FETCH_CURRENT_USER });
    }
    return;
  };
  // There should also be a user check on reboot. I didn’t write it because we have no requests.

  const providerValue = {
    user: state.user,
    isLoggedIn: state.isLoggedIn,
    onLogIn,
    onLogOut,
    fetchCurrentUser,
  };

  return (
    <AuthContext.Provider value={providerValue}>
      {children}
    </AuthContext.Provider>
  );
}
