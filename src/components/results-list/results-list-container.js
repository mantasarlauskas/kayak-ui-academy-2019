import { connect } from 'react-redux';
import { clearMovies } from '../../actions/search';
import { setMovie } from '../../actions/selectedMovie';
import ResultsList from './results-list';

const mapStateToProps = ({ search: { movies: results, isMoviesLoading } }) => ({
  results,
  isMoviesLoading
});

const mapDispatchToProps = {
  clearMovies,
  setMovie
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResultsList);
