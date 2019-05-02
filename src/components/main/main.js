import PropTypes from 'prop-types';
import React from 'react';
import MovieCardWrapper from '../movie-card-wrapper';
import MovieCard from '../movie-card';
import FavouriteMovies from '../favorite-movies';
import '../../client/movies/index.scss';

const Main = ({ selectedMovie }) => (
  <div className="page-content container">
    <MovieCardWrapper>
      {selectedMovie ? (
        <MovieCard selectedMovie={selectedMovie} />
      ) : (
        <div className="mb-30">
          <h3>Selected Movie</h3>
        </div>
      )}
    </MovieCardWrapper>
    <FavouriteMovies />
  </div>
);

Main.propTypes = {
  selectedMovie: PropTypes.object
};

Main.defaultProps = {
  selectedMovie: null
};

export default Main;
