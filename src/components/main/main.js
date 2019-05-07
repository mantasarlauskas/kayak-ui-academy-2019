import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import MovieCardWrapper from '../movie-card-wrapper';
import MovieCard from '../movie-card';
import FavouriteMovies from '../favorite-movies';
import styles from './main.scss';

const Main = ({ selectedMovie, resetMovie }) => {
  useEffect(
    () => () => {
      if (selectedMovie) {
        resetMovie();
      }
    },
    []
  );

  return (
    <div className="page-content container">
      {selectedMovie && (
        <MovieCardWrapper>
          <MovieCard />
        </MovieCardWrapper>
      )}
      <aside className="aside">
        <div className="container">
          <div className="content-wrapper">
            <div className={styles.listButtonWrapper}>
              <Link to="/lists">
                <button type="button" className="btn btn-primary">
                  My Lists
                </button>
              </Link>
            </div>
            <FavouriteMovies />
          </div>
        </div>
      </aside>
    </div>
  );
};

Main.propTypes = {
  selectedMovie: PropTypes.object,
  resetMovie: PropTypes.func.isRequired
};

Main.defaultProps = {
  selectedMovie: null
};

export default Main;
