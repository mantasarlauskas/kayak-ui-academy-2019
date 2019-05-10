import {
  getLists as fetchLists,
  createList,
  updateList,
  addMovieToList,
  deleteList,
  deleteMovieFromList,
  clearList,
  setMovieComment
} from '../services/movieDB';

export const GET_LISTS = 'GET_LISTS';
export const GOT_LISTS = 'GOT_LISTS';
export const CLEAR_LISTS = 'CLEAR_LISTS';
export const SET_SORT = 'SET_SORT';
export const RESET_SORT = 'RESET_SORT';

const getLists = () => ({
  type: GET_LISTS
});

const gotLists = lists => ({
  type: GOT_LISTS,
  lists
});

export const setSort = sortBy => ({
  type: SET_SORT,
  sortBy
});

export const resetSort = () => ({
  type: RESET_SORT
});

export const clearLists = () => ({
  type: CLEAR_LISTS
});

export const addMovie = (id, movieId) => async (dispatch, getState) => {
  await addMovieToList(id, movieId, getState().authorization.user.access_token);
  dispatch(setLists());
};

export const addMovieComment = (id, movieId, comment) => async (dispatch, getState) => {
  await setMovieComment(id, movieId, comment, getState().authorization.user.access_token);
  dispatch(setLists());
};

export const deleteMovie = (id, movieId) => async (dispatch, getState) => {
  await deleteMovieFromList(id, movieId, getState().authorization.user.access_token);
  dispatch(setLists());
};

export const deleteAllMovies = id => async (dispatch, getState) => {
  await clearList(id, getState().authorization.user.access_token);
  dispatch(setLists());
};

export const removeList = id => async (dispatch, getState) => {
  await deleteList(id, getState().authorization.user.access_token);
  dispatch(setLists());
};

export const addList = data => async (dispatch, getState) => {
  await createList(data, getState().authorization.user.access_token);
  dispatch(setLists());
};

export const editList = data => async (dispatch, getState) => {
  await updateList(data, getState().authorization.user.access_token);
  dispatch(setLists());
};

export const setLists = () => async (dispatch, getState) => {
  dispatch(getLists());
  const lists = await fetchLists(getState().authorization.user);
  dispatch(gotLists(lists));
};
