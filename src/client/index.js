import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import createStore from '../services/store';

import Routes from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';

const store = createStore();

const AppWithRedux = () => (
  <Provider store={store}>
    <Router>
      <Routes />
    </Router>
  </Provider>
);

hydrate(<AppWithRedux />, document.getElementById('root'));
