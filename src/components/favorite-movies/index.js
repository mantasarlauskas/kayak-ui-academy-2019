import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setMovies as setMoviesAction } from '../../actions/favorites';

const FavouriteMovies = ({ movies, setMovies }) => {
  useEffect(() => {
    setMovies();
  }, []);

  return (
    <aside className="aside">
      <div className="container">
        <div className="content-wrapper">
          <h3>My Favourites</h3>
          {movies.map(movie => (
            <div key={movie.id}>{movie.title}</div>
          ))}
        </div>
      </div>
    </aside>
  );
};

FavouriteMovies.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired,
  setMovies: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  movies: state.favorites.movies
});

const mapDispatchToProps = {
  setMovies: setMoviesAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavouriteMovies);
