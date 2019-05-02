import { connect } from 'react-redux';
import List from './list';

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

export default connect(mapStateToProps)(List);
