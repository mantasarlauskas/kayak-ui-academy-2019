import { connect } from 'react-redux';
import { removeList } from '../../actions/lists';
import Lists from './lists';

const mapStateToProps = ({ lists: { array, isLoading } }) => ({
  lists: array,
  isLoading
});

const mapDispatchToProps = {
  removeList
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lists);
