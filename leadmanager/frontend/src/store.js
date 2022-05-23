import { configureStore } from '@reduxjs/toolkit';
import { auth, errors, leads, messages } from './reducers';

const store = configureStore({
  reducer: {
    auth,
    errors,
    leads,
    messages,
  },
});

export default store;
