import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ListSort from '../list-sort';
import ListMovies from '../list-movies';
import Spinner from '../spinner';
import Alert from '../alert';

const List = ({ list, isLoading, id, deleteAllMovies }) => (
  <div className="container">
    {isLoading ? (
      <Spinner />
    ) : !list ? (
      <Alert type="danger">This list does not exist</Alert>
    ) : (
      <Fragment>
        <h2 className="text-centered mt-15 mb-15">{list.name}</h2>
        <fieldset className="card card-body mb-3">
          <legend className="w-auto mb-0">Description</legend>
          <em>{list.description}</em>
        </fieldset>
        {list.results.length > 0 ? (
          <Fragment>
            <div className="clearfix">
              <ListSort className="float-left" />
              <button
                type="button"
                className="btn btn-danger float-right mb-3"
                onClick={() => deleteAllMovies(id)}
              >
                Clear list
              </button>
            </div>
            <ListMovies id={id} list={list.results} />
          </Fragment>
        ) : (
          <Alert type="warning">List is empty</Alert>
        )}
      </Fragment>
    )}
  </div>
);

List.propTypes = {
  list: PropTypes.shape({
    results: PropTypes.array.isRequired
  }),
  isLoading: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  deleteAllMovies: PropTypes.func.isRequired
};

List.defaultProps = {
  list: null
};

export default List;
