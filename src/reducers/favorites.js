import { ADD_FAVORITE, REMOVE_FAVORITE, SET_MOVIES, FETCH_MOVIES } from '../actions/favorites';

const initialState = {
  movies: [],
  isLoading: false
};

const favorites = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        movies: [...state.movies, action.movie]
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        movies: state.movies.filter(movie => movie.id !== action.movie.id)
      };
    case FETCH_MOVIES:
      return {
        ...state,
        isLoading: true
      };
    case SET_MOVIES:
      return {
        ...state,
        movies: action.movies,
        isLoading: false
      };
    default:
      return state;
  }
};

export default favorites;
