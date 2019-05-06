import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ListSelect from '../list-select';
import { imagePath } from '../../services/movieDB';

const MovieCard = ({ selectedMovie, toggleFavorite, isFavorite, movieLists }) => {
  const [showList, setShowList] = useState(false);

  useEffect(() => {
    setShowList(false);
  }, [selectedMovie]);

  return (
    <div>
      <div className="mb-30">
        <h3>Selected Movie</h3>
      </div>
      <article className="movie-movie-card mb-30">
        <div className="movie-card__header">
          <div className="asset-meta">{selectedMovie.vote_average}</div>
          <h2 className="asset-title">{selectedMovie.title}</h2>
        </div>
        <div className="movie-card__body">
          <div className="asset-meta">{selectedMovie.release_date}</div>
          <div className="asset-meta">{selectedMovie.original_title}</div>
          <div className="asset-meta">{selectedMovie.original_language}</div>
          <div className="asset-description">{selectedMovie.overview}</div>
          <div className="asset-meta">
            {movieLists.length > 0 ? (
              movieLists.map(({ name, id }) => <div key={id}>{name}</div>)
            ) : (
              <div className="alert alert-warning mt-3">
                This movie has not been added to a list yet
              </div>
            )}
          </div>
          <div className="clearfix mt-4">
            <button
              type="button"
              className="button float-left"
              onClick={() => toggleFavorite(selectedMovie)}
            >
              {isFavorite ? 'Remove from favorites!' : 'Add to favorites!'}
            </button>
            <button
              type="button"
              className="button float-right"
              onClick={() => setShowList(!showList)}
            >
              {showList ? 'Close' : 'Add to list'}
            </button>
          </div>
          {showList && <ListSelect />}
        </div>
        <div className="movie-card__thumbnail">
          <img
            className="asset-poster"
            src={`${imagePath}${selectedMovie.poster_path}`}
            alt={selectedMovie.original_title}
          />
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
    original_title: PropTypes.string.isRequired,
    original_language: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired
  }).isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  movieLists: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    })
  ).isRequired
};

export default MovieCard;
