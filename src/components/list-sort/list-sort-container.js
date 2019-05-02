import { connect } from 'react-redux';
import { setSort } from '../../actions/lists';
import ListSort from './list-sort';

const mapDispatchToProps = {
  setSort
};

export default connect(
  null,
  mapDispatchToProps
)(ListSort);
