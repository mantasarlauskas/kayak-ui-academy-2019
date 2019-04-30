import { connect } from 'react-redux';
import { setLists } from '../../actions/lists';
import { setMovie } from '../../actions/selectedMovie';
import Lists from './lists';

const mapStateToProps = ({ lists: { list, isLoading } }) => ({
  list,
  isLoading
});

const mapDispatchToProps = {
  setMovie,
  setLists
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lists);
