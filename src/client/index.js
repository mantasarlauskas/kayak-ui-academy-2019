import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import createStore from '../services/store';
import App from '../components/app';

const store = createStore();

const AppWithRedux = () => (
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);

hydrate(<AppWithRedux />, document.getElementById('root'));
