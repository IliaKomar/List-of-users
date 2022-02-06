import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store/index';

import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
