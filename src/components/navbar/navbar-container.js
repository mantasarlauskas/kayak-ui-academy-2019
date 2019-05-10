import { connect } from 'react-redux';
import { loginUser, logoutUser } from '../../actions/authorization';
import Navbar from './navbar';

const mapStateToProps = ({ authorization: { user } }) => ({
  user
});

const mapDispatchToProps = {
  loginUser,
  logoutUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
