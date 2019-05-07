import { connect } from 'react-redux';
import { resetMovie } from '../../actions/selectedMovie';
import Main from './main';

const mapStateToProps = ({ selectedMovie }) => ({
  selectedMovie
});

const mapDispatchToProps = {
  resetMovie
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
