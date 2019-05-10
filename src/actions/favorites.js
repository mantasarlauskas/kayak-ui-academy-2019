import { getMoviesList } from '../services/movieDB';

export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';
export const SET_MOVIES = 'SET_MOVIES';
export const FETCH_MOVIES = 'FETCH_MOVIES';
const FAVORITE_MOVIES_KEY = 'FAVORITE_MOVIES';

const getIdsFromStorage = storageClient =>
  (storageClient.get(FAVORITE_MOVIES_KEY) && storageClient.get(FAVORITE_MOVIES_KEY).split(',')) ||
  [];

const addFavoriteAction = movie => ({
  type: ADD_FAVORITE,
  movie
});

const removeFavoriteAction = movie => ({
  type: REMOVE_FAVORITE,
  movie
});

const setMoviesAction = movies => ({
  type: SET_MOVIES,
  movies
});

const fetchMovies = () => ({
  type: FETCH_MOVIES
});

export const addFavorite = movie => (dispatch, getState, { storageClient }) => {
  const ids = getIdsFromStorage(storageClient);
  ids.push(movie.id.toString());
  storageClient.set(FAVORITE_MOVIES_KEY, ids);
  dispatch(addFavoriteAction(movie));
};

export const removeFavorite = movie => (dispatch, getState, { storageClient }) => {
  const ids = getIdsFromStorage(storageClient);
  const index = ids.findIndex(id => id === movie.id.toString());
  ids.splice(index, 1);
  storageClient.set(FAVORITE_MOVIES_KEY, ids);
  dispatch(removeFavoriteAction(movie));
};

export const setMovies = () => async (dispatch, getState, { storageClient }) => {
  dispatch(fetchMovies());
  const movies = await getMoviesList(getIdsFromStorage(storageClient));
  dispatch(setMoviesAction(movies));
};
