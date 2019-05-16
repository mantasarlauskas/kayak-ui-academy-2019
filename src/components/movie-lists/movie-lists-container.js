import { connect } from 'react-redux';
import MovieLists from './movie-lists';

const mapStateToProps = ({ lists: { array }, selectedMovie }) => ({
  movieLists: array.filter(({ results }) => !!results.find(movie => movie.id === selectedMovie.id))
});

export default connect(mapStateToProps)(MovieLists);
