import axios from 'axios';

const accountID = '5cc752a2c3a36820b58664db';
const apiKey = '309d013fc2c6056e01770285c01bd2a1';
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYmYiOjE1NTY2MTc4MjQsInN1YiI6IjVjYzc1MmEyYzNhMzY4MjBiNTg2NjRkYiIsImp0aSI6IjEzMDUzODgiLCJhdWQiOiIzMDlkMDEzZmMyYzYwNTZlMDE3NzAyODVjMDFiZDJhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCIsImFwaV93cml0ZSJdLCJ2ZXJzaW9uIjoxfQ.xQSaQ7SlGWd2KDp6-zhzkWDA9P0uoOfc3y-3IAKOY_o';
const url = 'https://api.themoviedb.org/4';
const config = {
  headers: {
    Authorization: `Bearer ${token}`
  }
};
const moviesMemo = {};
export const imagePath = 'https://image.tmdb.org/t/p/w500';

export const getMovies = query => {
  if (moviesMemo[query]) {
    return Promise.resolve(moviesMemo[query]);
  }

  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}`
  )
    .then(response => response.json())
    .then(({ results }) => {
      const slicedResults = results.slice(0, 8);
      moviesMemo[query] = slicedResults;
      return slicedResults;
    });
};

export const getGenres = () =>
  fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`).then(
    response => response.json()
  );

export const getMoviesList = ids => {
  const promises = ids.map(id =>
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`).then(
      response => response.json()
    )
  );

  return Promise.all(promises);
};

export const getLists = async () => {
  const {
    data: { results }
  } = await axios.get(`${url}/account/${accountID}/lists`, config);
  return results;
};

export const getList = async id => {
  const {
    data: { results }
  } = await axios.get(`${url}/list/${id}`, config);
  return results;
};

export const createList = async data =>
  axios.post(`${url}/list`, { ...data, iso_639_1: 'en' }, config);

export const updateList = async ({ id, ...data }) => axios.put(`${url}/list/${id}`, data, config);
