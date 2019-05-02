import { GOT_LISTS, GET_LISTS } from '../actions/lists';

const initialState = {
  array: [],
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_LISTS:
      return {
        ...state,
        isLoading: true
      };
    case GOT_LISTS:
      return {
        ...state,
        array: action.lists,
        isLoading: false
      };
    default:
      return state;
  }
};
