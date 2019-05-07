import { connect } from 'react-redux';
import { deleteAllMovies } from '../../actions/lists';
import List from './list';

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
  deleteAllMovies
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
