import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';
import HeaderWrapper from '../header-wrapper';
import Autocomplete from '../autocomplete';
import Footer from '../footer';
import Main from '../main';
import Lists from '../lists';
import AddListForm from '../add-list-form';
import EditListForm from '../edit-list-form';
import List from '../list';
import NoMatch from '../noMatch';
import Spinner from '../spinner';

const App = ({ setLists, setMovies, user, checkUser, isLoading }) => {
  useEffect(() => {
    checkUser();
    setMovies();
  }, []);

  useEffect(() => {
    if (user) {
      setLists();
    }
  }, [user]);

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="page-wrapper">
      <HeaderWrapper>
        <Autocomplete />
      </HeaderWrapper>
      <div className="page-content">
        {user ? (
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/lists" component={Lists} />
            <Route path="/add-list" component={AddListForm} />
            <Route path="/edit-list/:id" component={EditListForm} />
            <Route path="/list/:id" component={List} />
            <Route component={NoMatch} />
          </Switch>
        ) : (
          <Switch>
            <Route path="/" exact component={Main} />
            <Route component={NoMatch} />
          </Switch>
        )}
      </div>
      <Footer />
    </div>
  );
};

App.propTypes = {
  setLists: PropTypes.func.isRequired,
  setMovies: PropTypes.func.isRequired,
  checkUser: PropTypes.func.isRequired,
  user: PropTypes.shape({
    access_token: PropTypes.string.isRequired,
    account_id: PropTypes.string.isRequired
  }),
  isLoading: PropTypes.bool.isRequired
};

App.defaultProps = {
  user: null
};

export default withRouter(hot(App));
