import { GET_CURRENT_LIST, GOT_CURRENT_LIST, RESET_CURRENT_LIST } from '../actions/currentList';

const initialState = {
  array: [],
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENT_LIST:
      return {
        ...state,
        isLoading: true
      };
    case GOT_CURRENT_LIST:
      return {
        array: action.list,
        isLoading: false
      };
    case RESET_CURRENT_LIST:
      return initialState;
    default:
      return state;
  }
};
