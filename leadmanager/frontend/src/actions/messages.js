import { CREATE_MESSAGE, GET_ERRORS } from './types';

// Create message
export const createMessage = (msg) => ({
  type: CREATE_MESSAGE,
  payload: msg,
});

// Return errors
export const returnErrors = (msg, status) => ({
  type: GET_ERRORS,
  payload: { msg, status },
});
