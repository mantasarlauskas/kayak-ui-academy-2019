import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { imagePath } from '../../services/movieDB';

const MovieCard = ({ selectedMovie, toggleFavorite, isFavorite, lists, addMovie, movieList }) => {
  const [showList, setShowList] = useState(false);
  const [list, setList] = useState(null);

  useEffect(
    () => () => {
      setShowList(false);
    },
    [selectedMovie]
  );

  useEffect(() => {
    if (lists.length > 0) {
      setList(lists[0].id);
    }
  }, [lists]);

  const showListSelect = (
    <Fragment>
      <select value={list} onChange={({ target: { value } }) => setList(parseInt(value, 10))}>
        {lists.map(({ name, id }) => (
          <option key={id} value={id}>
            {name}
          </option>
        ))}
      </select>
      <button
        type="submit"
        className="button mt-30"
        onClick={() => addMovie(list, selectedMovie.id)}
      >
        Submit
      </button>
    </Fragment>
  );

  const showMovieLists = ({ name, id }) => <div key={id}>{name}</div>;

  return (
    <div>
      <div className="mb-30">
        <h3>Selected Movie</h3>
      </div>
      <article className="card mb-30">
        <div className="card__header">
          <div className="asset-meta">{selectedMovie.vote_average}</div>
          <h2 className="asset-title">{selectedMovie.title}</h2>
        </div>
        <div className="card__body">
          <div className="asset-meta">{selectedMovie.release_date}</div>
          <div className="asset-meta">{selectedMovie.original_title}</div>
          <div className="asset-meta">{selectedMovie.original_language}</div>
          <div className="asset-description">{selectedMovie.overview}</div>
          <div className="asset-meta">
            Listai:
            {movieList.length > 0 ? movieList.map(showMovieLists) : 'nera jokiame liste'}
          </div>
          <button
            type="button"
            className="button mt-30"
            onClick={() => toggleFavorite(selectedMovie)}
          >
            {isFavorite ? 'Remove from favorites!' : 'Add to favorites!'}
          </button>
          <button type="button" className="button mt-30" onClick={() => setShowList(!showList)}>
            {showList ? 'Close' : 'Add to list'}
          </button>
          {showList && (lists.length > 0 ? showListSelect : <div>listu nera</div>)}
        </div>
        <div className="card__thumbnail">
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
  selectedMovie: PropTypes.shape({ id: PropTypes.number.isRequired }).isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  addMovie: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  lists: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    })
  ).isRequired,
  movieList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    })
  ).isRequired
};

export default MovieCard;
