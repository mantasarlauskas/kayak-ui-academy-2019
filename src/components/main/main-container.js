import { connect } from 'react-redux';

import Main from './main';

const mapStateToProps = ({ selectedMovie }) => ({
  selectedMovie
});

export default connect(mapStateToProps)(Main);
