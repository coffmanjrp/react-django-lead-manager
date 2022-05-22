import { configureStore } from '@reduxjs/toolkit';
import leads from './reducers/leads';

const store = configureStore({
  reducer: {
    leads,
  },
});

export default store;
