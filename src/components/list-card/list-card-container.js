import { connect } from 'react-redux';
import { deleteMovie } from '../../actions/lists';
import ListCard from './list-card';

const mapStateToProps = ({ lists: { array } }, { listId, id }) => ({
  comment: array.find(list => list.id === parseInt(listId, 10)).comments[`movie:${id}`]
});

const mapDispatchToProps = {
  deleteMovie
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListCard);
