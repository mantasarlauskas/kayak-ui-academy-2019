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
import '../../client/movies/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = ({ setLists }) => {
  useEffect(() => {
    setLists();
  }, []);

  return (
    <div className="page-wrapper">
      <HeaderWrapper>
        <Autocomplete />
      </HeaderWrapper>
      <div className="page-content">
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/lists" component={Lists} />
          <Route path="/add-list" component={AddListForm} />
          <Route path="/edit-list/:id" component={EditListForm} />
          <Route path="/list/:id" component={List} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

App.propTypes = {
  setLists: PropTypes.func.isRequired
};

export default withRouter(hot(App));
