import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React from 'react';
import MovieCardWrapper from '../movie-card-wrapper';
import MovieCard from '../movie-card';
import FavouriteMovies from '../favorite-movies';
import '../../client/movies/index.scss';

const Main = ({ selectedMovie }) => (
  <div className="page-content container">
    {selectedMovie && (
      <MovieCardWrapper>
        <MovieCard />
      </MovieCardWrapper>
    )}
    <aside className="aside">
      <div className="container">
        <div className="content-wrapper">
          <h3>
            <Link to="/lists">My Lists</Link>
          </h3>
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
