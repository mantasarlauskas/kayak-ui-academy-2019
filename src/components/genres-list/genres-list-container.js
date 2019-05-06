import { connect } from 'react-redux';
import GenresList from './genres-list';

const mapStateToProps = ({ search: { genres } }) => ({
  genres
});

export default connect(mapStateToProps)(GenresList);
