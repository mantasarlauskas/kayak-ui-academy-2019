import { connect } from 'react-redux';
import { setMovie } from '../../actions/selectedMovie';
import { setLists } from '../../actions/lists';
import App from './app';

const mapDispatchToProps = {
  setMovie,
  setLists
};

export default connect(
  null,
  mapDispatchToProps
)(App);
