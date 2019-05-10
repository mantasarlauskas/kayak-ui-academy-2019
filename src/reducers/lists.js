import { GOT_LISTS, GET_LISTS, SET_SORT, RESET_SORT, CLEAR_LISTS } from '../actions/lists';

const initialState = {
  array: [],
  isLoading: false,
  sortBy: 'TITLE_ASC'
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
    case SET_SORT:
      return {
        ...state,
        sortBy: action.sortBy
      };
    case RESET_SORT:
      return {
        ...state,
        sortBy: initialState.sortBy
      };
    case CLEAR_LISTS:
      return initialState;
    default:
      return state;
  }
};
