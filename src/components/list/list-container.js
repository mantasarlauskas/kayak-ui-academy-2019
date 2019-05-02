import { connect } from 'react-redux';
import { setCurrentList } from '../../actions/currentList';
import List from './list';

const mapStateToProps = (
  { lists, currentList },
  {
    match: {
      params: { id }
    }
  }
) => ({
  lists,
  currentList,
  id: parseInt(id, 10)
});

const mapDispatchToProps = {
  setCurrentList
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
