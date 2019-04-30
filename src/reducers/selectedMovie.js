import { SELECT_MOVIE, RESET_MOVIE } from '../actions/selectedMovie';

export default (state = null, action) => {
  switch (action.type) {
    case SELECT_MOVIE:
      return action.movie;
    case RESET_MOVIE:
      return null;
    default:
      return state;
  }
};
