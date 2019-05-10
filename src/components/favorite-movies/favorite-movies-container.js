import { connect } from 'react-redux';
import FavoriteMovies from './favorite-movies';

const mapStateToProps = ({ favorites: { movies, isLoading } }) => ({
  movies,
  isLoading
});

export default connect(mapStateToProps)(FavoriteMovies);
