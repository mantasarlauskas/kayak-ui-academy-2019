import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Navbar from '../navbar';

const HeaderWrapper = ({ children }) => (
  <header className="page-header">
    <Navbar />
    <div className="container">
      <div className="content-wrapper">
        <div className="search">
          <div className="search pt-60 pb-15">
            <h1 className="text-centered pb-15">
              <Link to="/">My movies</Link>
            </h1>
            <div className="autocomplete field max-width-600 block-centered">{children}</div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

HeaderWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default HeaderWrapper;
