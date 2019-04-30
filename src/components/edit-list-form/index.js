import { connect } from 'react-redux';
import { editList } from '../../actions/lists';
import ListForm from '../list-form';

const mapStateToProps = (
  { lists: { list: listOfLists } },
  {
    match: {
      params: { id }
    }
  }
) => ({
  list: listOfLists.find(list => list.id === parseInt(id, 10)),
  id: parseInt(id, 10)
});

const mapDispatchToProps = {
  submitForm: editList
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListForm);
