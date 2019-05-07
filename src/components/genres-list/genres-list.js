import React from 'react';
import PropTypes from 'prop-types';

const GenresList = ({ genres }) =>
  genres.map(genre => (
    <span className="mr-1" key={genre.name}>
      {genre.name}
    </span>
  ));

GenresList.propTypes = {
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired
    })
  ).isRequired
};

export default GenresList;
