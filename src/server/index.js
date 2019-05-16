import { renderToStaticMarkup } from 'react-dom/server';
import React from 'react';
import express from 'express';
import { Provider } from 'react-redux';
import { StaticRouter as Router } from 'react-router-dom';
import createStore from '../services/store';
import App from '../components/app';

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static('dist'));

const AppWithRedux = () => (
  <Provider store={createStore()}>
    <Router>
      <App />
    </Router>
  </Provider>
);

app.get('*', (req, res) => {
  res.send(`
    <html>
      <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Kayak UI Academy</title>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
        <link rel="stylesheet" href="/styles.css">
      </head>
      <body>
        <div id="root">${renderToStaticMarkup(<AppWithRedux />)}</div>
        <script src="/index.js"></script>
      </body>
    </html>
  `);
});

app.listen(port, () => console.log('Production server is running on!'));
