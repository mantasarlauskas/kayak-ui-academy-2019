import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ListSelect from '../list-select';
import MovieLists from '../movie-lists';
import Spinner from '../spinner';
import { imagePath } from '../../services/movieDB';

const MovieCard = ({
  selectedMovie,
  resetMovie,
  addFavorite,
  removeFavorite,
  user,
  isFavorite,
  isLoading
}) => {
  const [showListForm, setShowListForm] = useState(false);

  useEffect(() => () => resetMovie(), []);

  useEffect(() => {
    if (showListForm) {
      setShowListForm(false);
    }
  }, [isLoading, selectedMovie]);

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="card card-body">
      <h4 className="text-centered">Selected Movie</h4>
      <article className="movie-card mt-2">
        <div className="movie-card__thumbnail">
          <img
            className="asset-poster"
            src={`${imagePath}${selectedMovie.poster_path}`}
            alt={selectedMovie.original_title}
          />
        </div>
        <div className="movie-card__header">
          <h2 className="asset-title text-centered">{selectedMovie.title}</h2>
          <div className="asset-meta">
            <strong>{`Rating: ${selectedMovie.vote_average}`}</strong>
          </div>
          <div className="asset-meta mt-2">
            <em>{`Date: ${selectedMovie.release_date}`}</em>
          </div>
        </div>
        <div className="movie-card__body">
          <div className="asset-description">
            <em>Description: </em>
            {selectedMovie.overview}
          </div>
          <div className="container mt-4">
            <div className="row justify-content-between">
              <button
                type="button"
                className="button mb-3"
                onClick={() =>
                  isFavorite ? removeFavorite(selectedMovie) : addFavorite(selectedMovie)
                }
              >
                {isFavorite ? 'Remove from favorites!' : 'Add to favorites!'}
              </button>
              {user && (
                <button
                  type="button"
                  className="button mb-3"
                  onClick={() => setShowListForm(!showListForm)}
                >
                  {showListForm ? 'Close' : 'Add to list'}
                </button>
              )}
            </div>
          </div>
          {user && (showListForm ? <ListSelect /> : <MovieLists />)}
        </div>
      </article>
    </div>
  );
};

MovieCard.propTypes = {
  selectedMovie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    vote_average: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired
  }).isRequired,
  user: PropTypes.shape({
    access_token: PropTypes.string.isRequired,
    account_id: PropTypes.string.isRequired
  }),
  addFavorite: PropTypes.func.isRequired,
  removeFavorite: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  resetMovie: PropTypes.func.isRequired
};

MovieCard.defaultProps = {
  user: null
};

export default MovieCard;
