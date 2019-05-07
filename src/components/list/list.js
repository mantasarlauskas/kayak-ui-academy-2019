import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ListSort from '../list-sort';
import ListMovies from '../list-movies';
import Spinner from '../spinner';

const List = ({ list, isLoading, id, deleteAllMovies }) => (
  <div className="container">
    {isLoading ? (
      <Spinner />
    ) : !list ? (
      <div className="text-centered alert alert-danger mt-3">This list does not exist</div>
    ) : list.results.length > 0 ? (
      <Fragment>
        <h2 className="text-centered mt-15 mb-15">{list.name}</h2>
        <fieldset className="card card-body mb-3">
          <legend className="w-auto mb-0">Description</legend>
          <em>{list.description}</em>
        </fieldset>
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
      <div className="text-centered alert alert-warning mt-3">List is empty</div>
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
