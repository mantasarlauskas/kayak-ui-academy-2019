import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../spinner';
import Alert from '../alert';

const FavoriteMovies = ({ movies, isLoading }) => (
  <div className="mt-4">
    <h3 className="text-centered mb-0">My Favorites</h3>
    {isLoading ? (
      <Spinner />
    ) : movies.length > 0 ? (
      <ul className="list-group mt-3 mb-3">
        {movies.map(movie => (
          <li className="list-group-item" key={movie.id}>
            {movie.title}
          </li>
        ))}
      </ul>
    ) : (
      <Alert type="warning">There are no favorite movies yet</Alert>
    )}
  </div>
);

FavoriteMovies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default FavoriteMovies;
