import axios from 'axios';
import { USER_LOADING, USER_LOADED, AUTH_ERROR } from './types';
import { returnErrors } from './messages';

// Check token and load user
export const loadUser = () => async (dispatch, getState) => {
  // User loading
  dispatch({ type: USER_LOADING });

  // Get token from state
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // If token, add to headers config
  if (token) {
    config.headers['Authorization'] = `Token ${token}`;
  }

  await axios
    .get('/api/auth/user', config)
    .then((res) => dispatch({ type: USER_LOADED, payload: res.data }))
    .catch((err) => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({ type: AUTH_ERROR });
    });
};
