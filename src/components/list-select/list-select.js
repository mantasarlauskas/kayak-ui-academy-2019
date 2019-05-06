import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ListSelect = ({ lists, addMovie, selectedMovieId }) => {
  const [list, setList] = useState('');

  useEffect(() => {
    if (lists.length > 0) {
      setList(lists[0].id);
    }
  }, [lists]);

  const handleSubmit = e => {
    e.preventDefault();
    addMovie(list, selectedMovieId);
  };

  return lists.length > 0 ? (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <select
          className="form-control mt-3"
          id="list-select"
          value={list}
          onChange={({ target: { value } }) => setList(parseInt(value, 10))}
        >
          {lists.map(({ name, id }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className="button mt-3">
        Submit
      </button>
    </form>
  ) : (
    <div className="alert alert-danger text-centered mt-3">
      There are no lists available for this movie to be added to
    </div>
  );
};

ListSelect.propTypes = {
  lists: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    })
  ).isRequired,
  selectedMovieId: PropTypes.number.isRequired,
  addMovie: PropTypes.func.isRequired
};

export default ListSelect;
