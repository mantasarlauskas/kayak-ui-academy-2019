import { connect } from 'react-redux';
import { setMovie } from '../../actions/selectedMovie';
import { setLists } from '../../actions/lists';
import App from './app';

const mapStateToProps = ({ selectedMovie }) => ({
  selectedMovie
});

const mapDispatchToProps = {
  setMovie,
  setLists
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
