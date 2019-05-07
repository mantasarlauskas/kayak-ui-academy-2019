import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const FavoriteMovies = ({ movies, setMovies }) => {
  useEffect(() => {
    setMovies();
  }, []);

  return (
    <div className="mt-4">
      <h3 className="text-centered">My Favorites</h3>
      <ul className="list-group mt-3">
        {movies.map(movie => (
          <li className="list-group-item" key={movie.id}>
            {movie.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

FavoriteMovies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired,
  setMovies: PropTypes.func.isRequired
};

export default FavoriteMovies;
