import { connect } from 'react-redux';
import { toggleFavorite as toggleFavoriteAction } from '../../actions/favorites';
import MovieCard from './movie-card';

const mapStateToProps = ({ lists: { array }, favorites: { movies }, selectedMovie }) => ({
  isFavorite: !!movies.find(movie => movie.id === selectedMovie.id),
  movieLists: array.filter(({ results }) => !!results.find(movie => movie.id === selectedMovie.id)),
  selectedMovie
});

const mapDispatchToProps = {
  toggleFavorite: toggleFavoriteAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieCard);
