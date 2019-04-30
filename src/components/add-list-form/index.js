import { connect } from 'react-redux';
import { addList } from '../../actions/lists';
import ListForm from '../list-form';

const mapDispatchToProps = {
  submitForm: addList
};

export default connect(
  null,
  mapDispatchToProps
)(ListForm);
