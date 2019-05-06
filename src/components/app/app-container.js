import { connect } from 'react-redux';
import { setLists } from '../../actions/lists';
import App from './app';

const mapDispatchToProps = {
  setLists
};

export default connect(
  null,
  mapDispatchToProps
)(App);
