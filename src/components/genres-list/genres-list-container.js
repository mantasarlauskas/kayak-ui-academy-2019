import { connect } from 'react-redux';
import GenresList from './genres-list';

const mapStateToProps = ({ search: { genres } }, { ids }) => ({
  genres: ids.map(id => genres[id]).filter(d => !!d)
});

export default connect(mapStateToProps)(GenresList);
