import React from 'react';
import { Header } from './layout';
import { Dashboard } from './leads';

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Dashboard />
      </div>
    </>
  );
};

export default App;
