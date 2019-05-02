import { connect } from 'react-redux';
import { editList } from '../../actions/lists';
import ListForm from '../list-form';

const mapStateToProps = (
  { lists },
  {
    match: {
      params: { id }
    }
  }
) => ({
  lists,
  id: parseInt(id, 10)
});

const mapDispatchToProps = {
  submitForm: editList
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListForm);
