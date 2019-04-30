import React from 'react';
import { Switch, Route } from 'react-router-dom';
import App from '../components/app';
import Lists from '../components/lists';
import AddListForm from '../components/add-list-form';
import EditListForm from '../components/edit-list-form';

export default () => (
  <Switch>
    <Route path="/" exact component={App} />
    <Route path="/lists" component={Lists} />
    <Route path="/add-list" component={AddListForm} />
    <Route path="/edit-list/:id" component={EditListForm} />
  </Switch>
);
