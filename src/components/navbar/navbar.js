import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

const navItems = [
  {
    link: '/',
    text: 'Home',
    needsAuth: false
  },
  {
    link: '/lists',
    text: 'Lists',
    needsAuth: true
  }
];

const Navbar = ({ location: { pathname }, history: { push }, user, loginUser, logoutUser }) => {
  const handleAuthClick = () => {
    if (user) {
      logoutUser();
      if (pathname !== '/') {
        push('/');
      }
    } else {
      loginUser();
    }
  };

  return (
    <nav className="navbar bg-light navbar-light navbar-expand">
      <ul className="navbar-nav mr-auto">
        {navItems.map(
          ({ link, text, needsAuth }) =>
            (!needsAuth || user) && (
              <li key={link} className={`nav-item ${pathname === link ? 'active' : ''}`}>
                <Link className="nav-link" to={link}>
                  {text}
                </Link>
              </li>
            )
        )}
      </ul>
      <button
        type="button"
        className={`btn ${user ? 'btn-danger' : 'btn-primary'}`}
        onClick={handleAuthClick}
      >
        {user ? 'Logout' : 'Login'}
      </button>
    </nav>
  );
};

Navbar.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  user: PropTypes.shape({
    access_token: PropTypes.string.isRequired,
    account_id: PropTypes.string.isRequired
  }),
  loginUser: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired
};

Navbar.defaultProps = {
  user: null
};

export default withRouter(Navbar);
