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
import styles from './app.scss';
import '../../client/movies/index.scss';

const App = ({ setMovie, setLists, history, location }) => {
  useEffect(() => {
    setLists();
  }, []);

  const handleSelect = movie => {
    setMovie(movie);
    if (location.pathname !== '/') {
      history.push('/');
    }
  };

  return (
    <div className={styles.container}>
      <HeaderWrapper>
        <Autocomplete handleSelect={handleSelect} />
      </HeaderWrapper>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/lists" component={Lists} />
        <Route path="/add-list" component={AddListForm} />
        <Route path="/edit-list/:id" component={EditListForm} />
        <Route path="/list/:id" component={List} />
      </Switch>
      <Footer />
    </div>
  );
};

App.propTypes = {
  setMovie: PropTypes.func.isRequired,
  setLists: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default withRouter(hot(App));
