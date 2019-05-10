import { renderToStaticMarkup } from 'react-dom/server';
import React from 'react';
import express from 'express';
import App from '../components/app';

const port = process.env.PORT || 3000;

const app = express();

app.use(express.static('dist'));

app.get('*', (req, res) => {
  // then use `assetsByChunkName` for server-sider rendering
  // For example, if you have only one main chunk:
  res.send(`
  <html>
    <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Kayak UI Academy</title>
      <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
      <div id="root">${renderToStaticMarkup(<App />)}</div>
      <script src="/index.js"></script>
    </body>
  </html>
    `);
});

app.listen(port, () => console.log('Production server is running on!'));
