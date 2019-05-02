import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ListCard from '../list-card';
import Pagination from '../pagination';
import Spinner from '../spinner';

const List = ({ lists, id }) => {
  const [exists, setExists] = useState(false);
  const [currentList, setCurrentList] = useState(null);

  useEffect(() => {
    const list = lists.array.find(({ id: listId }) => listId === id);
    if (list) {
      setExists(true);
      setCurrentList(list);
    }
  }, [lists]);

  return lists.isLoading ? (
    <Spinner />
  ) : !exists ? (
    <div>tokio listo nera</div>
  ) : currentList.results.length > 0 ? (
    <Pagination data={currentList.results} itemsPerPage={2} Component={ListCard} />
  ) : (
    <div>listas tuscias</div>
  );
};

List.propTypes = {
  lists: PropTypes.shape({
    array: PropTypes.array.isRequired,
    isLoading: PropTypes.bool.isRequired
  }).isRequired,
  id: PropTypes.number.isRequired
};

export default List;
