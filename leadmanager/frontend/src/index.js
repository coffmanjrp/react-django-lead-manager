import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { positions, transitions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import store from './store';
import App from './components/App';

const options = {
  position: positions.TOP_CENTER,
  timeout: 3000,
  transition: transitions.SCALE,
};

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
  <ReduxProvider store={store}>
    <AlertProvider template={AlertTemplate} {...options}>
      <App />
    </AlertProvider>
  </ReduxProvider>
);
