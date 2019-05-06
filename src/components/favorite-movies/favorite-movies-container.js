import { connect } from 'react-redux';
import { setMovies as setMoviesAction } from '../../actions/favorites';
import FavoriteMovies from './favorite-movies';

const mapStateToProps = ({ favorites: { movies } }) => ({
  movies
});

const mapDispatchToProps = {
  setMovies: setMoviesAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoriteMovies);
