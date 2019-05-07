import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import ListCard from '../list-card';
import Pagination from '../pagination';

const ListMovies = ({ currentList, id, resetSort }) => {
  useEffect(() => () => resetSort(), []);

  return (
    <Pagination data={currentList} itemsPerPage={3}>
      {paginatedData => (
        <div className="row justify-content-center">
          {paginatedData.map(item => (
            <div className="col-4" key={item.id}>
              <ListCard {...item} listId={id} />
            </div>
          ))}
        </div>
      )}
    </Pagination>
  );
};

ListMovies.propTypes = {
  currentList: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  id: PropTypes.number.isRequired,
  resetSort: PropTypes.func.isRequired
};

export default ListMovies;
