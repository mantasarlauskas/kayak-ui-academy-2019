import { connect } from 'react-redux';
import { setLists, removeList } from '../../actions/lists';
import Lists from './lists';

const mapStateToProps = ({ lists: { array, isLoading } }) => ({
  lists: array,
  isLoading
});

const mapDispatchToProps = {
  setLists,
  removeList
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lists);
