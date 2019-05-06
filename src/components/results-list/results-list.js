import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import GenresList from '../genres-list';

const ResultsList = ({ isMoviesLoading, results, clearMovies, setMovie, location, history }) => {
  const handleSelect = movie => {
    setMovie(movie);
    clearMovies();
    if (location.pathname !== '/') {
      history.push('/');
    }
  };

  return isMoviesLoading ? (
    <div className="text-centered pt-2 pb-2">Loading...</div>
  ) : (
    results.map(movie => (
      <div
        key={movie.id}
        className={`item ${movie.favorite ? 'favoriteItem' : ''}`}
        onClick={() => handleSelect(movie)}
      >
        <span className="title">{`${movie.original_title} (${movie.release_date})`}</span>
        <span className="meta">
          <GenresList ids={movie.genre_ids} />
        </span>
      </div>
    ))
  );
};

ResultsList.propTypes = {
  setMovie: PropTypes.func.isRequired,
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      favorite: PropTypes.bool.isRequired,
      original_title: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
      genre_ids: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired
    })
  ).isRequired,
  clearMovies: PropTypes.func.isRequired,
  isMoviesLoading: PropTypes.bool.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

export default withRouter(ResultsList);
