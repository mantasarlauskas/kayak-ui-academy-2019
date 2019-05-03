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

  return isLoading ? (
    <Spinner />
  ) : !exists ? (
    <div>tokio listo nera</div>
  ) : currentList.length > 0 ? (
    <Fragment>
      <button type="button" className="btn btn-danger" onClick={() => deleteAllMovies(id)}>
        Clear list
      </button>
      <Pagination
        data={currentList}
        additionalProps={{ listId: id }}
        itemsPerPage={2}
        Component={ListCard}
      />
      <ListSort />
    </Fragment>
  ) : (
    <div>listas tuscias</div>
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
