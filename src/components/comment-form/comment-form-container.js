import { connect } from 'react-redux';
import { addMovieComment } from '../../actions/lists';
import CommentForm from './comment-form';

const mapDispatchToProps = {
  addMovieComment
};

export default connect(
  null,
  mapDispatchToProps
)(CommentForm);
