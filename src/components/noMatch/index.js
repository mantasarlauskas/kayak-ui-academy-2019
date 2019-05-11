import React from 'react';
import Alert from '../alert';

const NoMatch = () => (
  <div className="page-content container">
    <Alert type="danger">This route does not exist</Alert>
  </div>
);

export default NoMatch;
