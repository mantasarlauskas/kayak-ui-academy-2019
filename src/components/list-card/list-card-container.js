import { connect } from 'react-redux';
import { deleteMovie } from '../../actions/lists';
import ListCard from './list-card';

const mapDispatchToProps = {
  deleteMovie
};

export default connect(
  null,
  mapDispatchToProps
)(ListCard);
