import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
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

const App = ({ setMovie, setLists }) => {
  useEffect(() => {
    setLists();
  }, []);

  return (
    <div className={styles.container}>
      <HeaderWrapper>
        <Autocomplete handleSelect={setMovie} />
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
  setLists: PropTypes.func.isRequired
};

export default hot(App);
