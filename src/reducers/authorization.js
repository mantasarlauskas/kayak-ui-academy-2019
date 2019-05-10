import { SET_USER, RESET_USER, END_CHECK } from '../actions/authorization';

const initialState = {
  user: null,
  isLoading: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user
      };
    case RESET_USER:
      return {
        ...state,
        user: null
      };
    case END_CHECK:
      return {
        ...state,
        isLoading: false
      };
    default:
      return state;
  }
};
