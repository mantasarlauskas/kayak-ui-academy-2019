import React, { useEffect, useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import ListCard from '../list-card';
import ListSort from '../list-sort';
import Pagination from '../pagination';
import Spinner from '../spinner';

const List = ({ list, isLoading, id, resetSort, deleteAllMovies }) => {
  const [exists, setExists] = useState(false);
  const [currentList, setCurrentList] = useState(null);

  useEffect(() => () => resetSort(), []);

  useEffect(() => {
    if (list) {
      setExists(true);
      setCurrentList(list.results);
    }
  }, [list]);

  return (
    <div className="container">
      {isLoading ? (
        <Spinner />
      ) : !exists ? (
        <div className="text-centered alert alert-danger mt-3">This list does not exist</div>
      ) : currentList.length > 0 ? (
        <Fragment>
          <h2 className="text-centered mt-15 mb-15">{list.name}</h2>
          <p className="card card-body">
            <em>{list.description}</em>
          </p>
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
          <Pagination
            data={currentList}
            additionalProps={{ listId: id }}
            itemsPerPage={3}
            Component={ListCard}
          />
        </Fragment>
      ) : (
        <div className="text-centered alert alert-warning mt-3">List is empty</div>
      )}
    </div>
  );
};

List.propTypes = {
  list: PropTypes.shape({
    results: PropTypes.array.isRequired
  }),
  isLoading: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  resetSort: PropTypes.func.isRequired,
  deleteAllMovies: PropTypes.func.isRequired
};

List.defaultProps = {
  list: null
};

export default List;
