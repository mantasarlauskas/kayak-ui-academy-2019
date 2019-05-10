import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../spinner';

const FavoriteMovies = ({ movies, isLoading }) => (
  <div className="mt-4">
    <h3 className="text-centered">My Favorites</h3>
    <ul className="list-group mt-3">
      {isLoading ? (
        <Spinner />
      ) : movies.length > 0 ? (
        movies.map(movie => (
          <li className="list-group-item" key={movie.id}>
            {movie.title}
          </li>
        ))
      ) : (
        <div className="alert alert-warning text-centered">There are no favorite movies yet</div>
      )}
    </ul>
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
