import { connect } from 'react-redux';
import { addMovie } from '../../actions/lists';
import ListSelect from './list-select';

const mapStateToProps = ({ lists: { array }, selectedMovie }) => ({
  lists: array.filter(({ results }) => !results.find(movie => movie.id === selectedMovie.id)),
  selectedMovieId: selectedMovie.id
});

const mapDispatchToProps = {
  addMovie
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListSelect);
