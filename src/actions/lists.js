import {
  getLists as fetchLists,
  createList,
  updateList,
  addMovieToList,
  deleteLIst
} from '../services/movieDB';

export const GET_LISTS = 'GET_LISTS';
export const GOT_LISTS = 'GOT_LISTS';

const getLists = () => ({
  type: GET_LISTS
});

const gotLists = lists => ({
  type: GOT_LISTS,
  lists
});

export const addMovie = (id, movieId) => async dispatch => {
  await addMovieToList(id, movieId);
  dispatch(setLists());
};

export const setLists = () => async dispatch => {
  dispatch(getLists());
  const lists = await fetchLists();
  dispatch(gotLists(lists));
};

export const removeList = id => async dispatch => {
  await deleteLIst(id);
  dispatch(setLists());
};

export const addList = data => async dispatch => {
  await createList(data);
  dispatch(setLists());
};

export const editList = data => async dispatch => {
  await updateList(data);
  dispatch(setLists());
};
