import { connect } from 'react-redux';
import { editList } from '../../actions/lists';
import ListForm from '../list-form';

const mapStateToProps = (
  { lists: { array, isLoading } },
  {
    match: {
      params: { id }
    }
  }
) => ({
  list: array.find(({ id: listId }) => listId === parseInt(id, 10)),
  id: parseInt(id, 10),
  isLoading
});

const mapDispatchToProps = {
  submitForm: editList
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListForm);
