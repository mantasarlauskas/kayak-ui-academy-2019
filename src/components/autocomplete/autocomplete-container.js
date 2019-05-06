import { connect } from 'react-redux';
import { setGenres, setMovies } from '../../actions/search';
import Autocomplete from './autocomplete';

const mapDispatchToProps = {
  setGenres,
  setMovies
};

export default connect(
  null,
  mapDispatchToProps
)(Autocomplete);
