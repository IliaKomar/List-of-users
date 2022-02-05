import React from 'react';
import AplicationLayout from './layouts/AplicationLayout';
import Router from './router';
import { routes } from './router/config';

const App = () => {
  return (
    <AplicationLayout>
     <Router routes={routes} />
    </AplicationLayout>
  );
};

export default App;
