import { connect } from 'react-redux';
import { setLists } from '../../actions/lists';
import Lists from './lists';

const mapStateToProps = ({ lists: { array, isLoading } }) => ({
  lists: array,
  isLoading
});

const mapDispatchToProps = {
  setLists
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lists);
