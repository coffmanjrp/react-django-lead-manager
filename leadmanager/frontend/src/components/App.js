import React from 'react';
import { Alerts, Header } from './layout';
import { Dashboard } from './leads';

const App = () => {
  return (
    <>
      <Header />
      <Alerts />
      <div className="container">
        <Dashboard />
      </div>
    </>
  );
};

export default App;
