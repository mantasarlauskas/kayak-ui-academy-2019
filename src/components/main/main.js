import PropTypes from 'prop-types';
import React from 'react';
import MovieCardWrapper from '../movie-card-wrapper';
import MovieCard from '../movie-card';
import FavouriteMovies from '../favorite-movies';

const Main = ({ selectedMovie }) => (
  <div className={`page-content ${selectedMovie ? 'page-content--active' : ''} container`}>
    {selectedMovie && (
      <MovieCardWrapper>
        <MovieCard />
      </MovieCardWrapper>
    )}
    <aside className={`aside ${selectedMovie ? 'aside--active' : ''}`}>
      <div className="container">
        <div className="content-wrapper">
          <FavouriteMovies />
        </div>
      </div>
    </aside>
  </div>
);

Main.propTypes = {
  selectedMovie: PropTypes.object
};

Main.defaultProps = {
  selectedMovie: null
};

export default Main;
