import { hot } from 'react-hot-loader/root';
import PropTypes from 'prop-types';
import React from 'react';

import HeaderWrapper from '../header-wrapper';
import MovieCardWrapper from '../movie-card-wrapper';

import Autocomplete from '../autocomplete';
import MovieCard from '../movie-card';
import FavouriteMovies from '../favorite-movies';
import Footer from '../footer';

import styles from './app.scss';
import '../../client/movies/index.scss';

const App = ({ selectedMovie, setMovie }) => (
  <div className={styles.container}>
    <HeaderWrapper>
      <Autocomplete handleSelect={setMovie} />
    </HeaderWrapper>
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
    <Footer />
  </div>
);

App.propTypes = {
  setMovie: PropTypes.func.isRequired,
  selectedMovie: PropTypes.object
};

App.defaultProps = {
  selectedMovie: null
};

export default hot(App);
