import { connect } from 'react-redux';
import { setLists } from '../../actions/lists';
import { checkUser } from '../../actions/authorization';
import { setMovies } from '../../actions/favorites';
import App from './app';

const mapStateToProps = ({ authorization: { user, isLoading } }) => ({
  user,
  isLoading
});

const mapDispatchToProps = {
  setLists,
  setMovies,
  checkUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
