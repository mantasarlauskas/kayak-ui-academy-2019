import { getList } from '../services/movieDB';

export const GET_CURRENT_LIST = 'GET_CURRENT_LIST';
export const GOT_CURRENT_LIST = 'GOT_CURRENT_LIST';
export const RESET_CURRENT_LIST = 'RESET_CURRENT_LIST';

const getCurrentList = () => ({
  type: GET_CURRENT_LIST
});

const gotCurrentList = list => ({
  type: GOT_CURRENT_LIST,
  list
});

export const resetCurrentList = () => ({
  type: RESET_CURRENT_LIST
});

export const setCurrentList = id => async dispatch => {
  dispatch(getCurrentList());
  const list = await getList(id);
  dispatch(gotCurrentList(list));
};
