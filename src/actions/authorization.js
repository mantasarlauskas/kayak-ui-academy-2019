import { getAccessToken, getRequestToken } from '../services/movieDB';
import { clearLists } from './lists';

export const SET_USER = 'SET_USER';
export const RESET_USER = 'RESET_USER';
export const USER_KEY = 'USER';
export const END_CHECK = 'END_CHECK';
const REQUEST_TOKEN_KEY = 'REQUEST_TOKEN';

const setUser = user => ({
  type: SET_USER,
  user
});

const resetUser = () => ({
  type: RESET_USER
});

const endCheck = () => ({
  type: END_CHECK
});

export const loginUser = () => async (dispatch, getState, { storageClient }) => {
  const requestToken = await getRequestToken();
  storageClient.set(REQUEST_TOKEN_KEY, requestToken);
  window.location = `https://www.themoviedb.org/auth/access?request_token=${requestToken}`;
};

export const checkUser = () => async (dispatch, getState, { storageClient }) => {
  const requestToken = storageClient.get(REQUEST_TOKEN_KEY);
  const user = JSON.parse(storageClient.get(USER_KEY));
  if (requestToken) {
    const data = await getAccessToken(requestToken);
    storageClient.remove(REQUEST_TOKEN_KEY);
    if (data) {
      const { account_id, access_token } = data;
      storageClient.set(USER_KEY, JSON.stringify({ account_id, access_token }));
      dispatch(setUser({ account_id, access_token }));
    }
  } else if (user) {
    dispatch(setUser(user));
  }
  dispatch(endCheck());
};

export const logoutUser = () => (dispatch, getState, { storageClient }) => {
  storageClient.remove(USER_KEY);
  dispatch(resetUser());
  dispatch(clearLists());
};
