import axios from 'axios';

const moviesMemo = {};
const apiKey = '309d013fc2c6056e01770285c01bd2a1';
const urlV4 = 'https://api.themoviedb.org/4';
const urlV3 = 'https://api.themoviedb.org/3';
const readAccessToken =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMDlkMDEzZmMyYzYwNTZlMDE3NzAyODVjMDFiZDJhMSIsInN1YiI6IjVjYzc1MmEyYzNhMzY4MjBiNTg2NjRkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yXdXgp6XChvqW9fyRq2HDcAaDznEHZWBJNstp7-Gm7I';

export const imagePath = 'https://image.tmdb.org/t/p/w500';

const getConfig = token => ({
  headers: {
    Authorization: `Bearer ${token}`
  }
});

export const getRequestToken = async () => {
  const {
    data: { request_token }
  } = await axios.post(
    `${urlV4}/auth/request_token`,
    { redirect_to: 'http://localhost:3000/' },
    getConfig(readAccessToken)
  );
  return request_token;
};

export const getAccessToken = async token => {
  try {
    const { data } = await axios.post(
      `${urlV4}/auth/access_token`,
      { request_token: token },
      getConfig(readAccessToken)
    );
    return data;
  } catch (err) {
    return null;
  }
};

export const getMovies = async query => {
  if (moviesMemo[query]) {
    return moviesMemo[query];
  }

  const {
    data: { results }
  } = await axios.get(`${urlV3}/search/movie?api_key=${apiKey}&language=en-US&query=${query}`);
  const slicedResults = results.slice(0, 8);
  moviesMemo[query] = slicedResults;
  return slicedResults;
};

export const getGenres = () =>
  axios.get(`${urlV3}/genre/movie/list?api_key=${apiKey}&language=en-US`);

export const getMoviesList = ids => {
  const promises = ids.map(async id => {
    const { data } = await axios.get(`${urlV3}/movie/${id}?api_key=${apiKey}&language=en-US`);
    return data;
  });
  return Promise.all(promises);
};

const getMoviesFromLists = (lists, token) => {
  const promises = lists.map(async ({ id }) => {
    const { data } = await axios.get(`${urlV4}/list/${id}`, getConfig(token));
    return data;
  });
  return Promise.all(promises);
};

export const getLists = async ({ account_id, access_token }) => {
  const {
    data: { results }
  } = await axios.get(`${urlV4}/account/${account_id}/lists`, getConfig(access_token));
  return getMoviesFromLists(results, access_token);
};

export const addMovieToList = (id, movieId, token) =>
  axios.post(
    `${urlV4}/list/${id}/items`,
    { items: [{ media_type: 'movie', media_id: movieId }] },
    getConfig(token)
  );

export const deleteMovieFromList = (id, movieId, token) =>
  axios.delete(`${urlV4}/list/${id}/items`, {
    data: { items: [{ media_type: 'movie', media_id: movieId }] },
    ...getConfig(token)
  });

export const setMovieComment = (id, movieId, comment, token) =>
  axios.put(
    `${urlV4}/list/${id}/items`,
    { items: [{ media_type: 'movie', media_id: movieId, comment }] },
    getConfig(token)
  );

export const createList = (data, token) =>
  axios.post(`${urlV4}/list`, { ...data, iso_639_1: 'en' }, getConfig(token));

export const updateList = ({ id, ...data }, token) =>
  axios.put(`${urlV4}/list/${id}`, data, getConfig(token));

export const deleteList = (id, token) => axios.delete(`${urlV4}/list/${id}`, getConfig(token));

export const clearList = (id, token) => axios.get(`${urlV4}/list/${id}/clear`, getConfig(token));
