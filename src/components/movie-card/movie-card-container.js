import { connect } from 'react-redux';
import { toggleFavorite as toggleFavoriteAction } from '../../actions/favorites';
import { addMovie } from '../../actions/lists';
import MovieCard from './movie-card';

const mapStateToProps = (
  { lists: { array }, favorites: { movies } },
  { selectedMovie: { id } }
) => ({
  lists: array.filter(({ results }) => !results.find(movie => movie.id === id)),
  isFavorite: !!movies.find(movie => movie.id === id),
  movieList: array.filter(({ results }) => !!results.find(movie => movie.id === id))
});

const mapDispatchToProps = {
  toggleFavorite: toggleFavoriteAction,
  addMovie
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieCard);
