import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Alert from '../alert';

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
    <form className="clearfix" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="w-100" htmlFor="list-select">
          Select list:
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
        </label>
      </div>
      <button type="submit" className="button float-right mt-3">
        Submit
      </button>
    </form>
  ) : (
    <Alert type="danger">There are no lists available for this movie to be added to</Alert>
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
