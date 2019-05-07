import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

const navItems = [
  {
    link: '/',
    text: 'Home'
  },
  {
    link: '/lists',
    text: 'Lists'
  }
];

const Navbar = ({ location: { pathname } }) => (
  <nav className="navbar bg-light navbar-light navbar-expand">
    <ul className="navbar-nav">
      {navItems.map(({ link, text }) => (
        <li key={link} className={`nav-item ${pathname === link ? 'active' : ''}`}>
          <Link className="nav-link" to={link}>
            {text}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

Navbar.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default withRouter(Navbar);
