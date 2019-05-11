import React from 'react';
import PropTypes from 'prop-types';

const Alert = ({ children, type }) => (
  <div className={`alert alert-${type} text-centered mt-3`}>{children}</div>
);

Alert.propTypes = {
  type: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired
};

export default Alert;
