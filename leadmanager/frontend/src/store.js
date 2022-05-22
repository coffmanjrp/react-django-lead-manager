import { configureStore } from '@reduxjs/toolkit';
import errors from './reducers/errors';
import leads from './reducers/leads';
import messages from './reducers/messages';

const store = configureStore({
  reducer: {
    errors,
    leads,
    messages,
  },
});

export default store;
