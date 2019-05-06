import React from 'react';
import PropTypes from 'prop-types';

const MovieCardWrapper = ({ children }) => (
  <main className="main">
    <div className="container">
      <div className="content-wrapper">{children}</div>
    </div>
  </main>
);

MovieCardWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default MovieCardWrapper;
