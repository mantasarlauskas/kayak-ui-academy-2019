import { connect } from 'react-redux';
import { resetMovie } from '../../actions/selectedMovie';
import { addFavorite, removeFavorite } from '../../actions/favorites';
import MovieCard from './movie-card';

const mapStateToProps = ({
  lists: { isLoading },
  favorites: { movies },
  selectedMovie,
  authorization: { user }
}) => ({
  isFavorite: !!movies.find(movie => movie.id === selectedMovie.id),
  selectedMovie,
  user,
  isLoading
});

const mapDispatchToProps = {
  addFavorite,
  removeFavorite,
  resetMovie
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieCard);
