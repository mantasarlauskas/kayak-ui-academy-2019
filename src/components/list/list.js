import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ListCard from '../list-card';
import Pagination from '../pagination';
import Spinner from '../spinner';

const List = ({ lists, currentList, setCurrentList, id }) => {
  const [exists, setExists] = useState(false);

  useEffect(() => {
    if (lists.array.find(list => list.id === id)) {
      setExists(true);
      setCurrentList(id);
    }
  }, [lists]);

  return lists.isLoading || currentList.isLoading ? (
    <Spinner />
  ) : !exists ? (
    <div>tokio listo nera</div>
  ) : currentList.array.length > 0 ? (
    <Pagination data={currentList.array} itemsPerPage={2} Component={ListCard} />
  ) : (
    <div>listas tuscias</div>
  );
};

List.propTypes = {
  lists: PropTypes.shape({
    array: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired
  }).isRequired,
  currentList: PropTypes.shape({
    array: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired
  }).isRequired,
  setCurrentList: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired
};

export default List;
