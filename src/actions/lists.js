import { getLists as fetchLists, createList, updateList } from '../services/movieDB';

export const GET_LISTS = 'GET_LISTS';
export const GOT_LISTS = 'GOT_LISTS';

const getLists = () => ({
  type: GET_LISTS
});

const gotLists = lists => ({
  type: GOT_LISTS,
  lists
});

export const setLists = () => async dispatch => {
  dispatch(getLists());
  const lists = await fetchLists();
  dispatch(gotLists(lists));
};

export const addList = data => async () => createList(data);

export const editList = data => async () => updateList(data);
