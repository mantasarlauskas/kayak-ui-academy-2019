import { getMovies, getGenres } from '../services/movieDB';

export const GOT_GENRES = 'GOT_GENRES';
export const GOT_MOVIES = 'GOT_MOVIES';
export const CLEAR_MOVIES = 'CLEAR_MOVIES';
export const GOT_MOVIES_LOADING = 'GOT_MOVIES_LOADING';

const gotGenres = genres => ({
  type: GOT_GENRES,
  genres
});

const gotMovies = movies => ({
  type: GOT_MOVIES,
  movies
});

const gotMoviesLoading = () => ({
  type: GOT_MOVIES_LOADING
});

export const clearMovies = () => ({
  type: CLEAR_MOVIES
});

export const setGenres = () => async dispatch => {
  const {
    data: { genres }
  } = await getGenres();
  dispatch(gotGenres(genres));
};

export const setMovies = inputValue => async (dispatch, getState) => {
  if (inputValue.length < 3) {
    return dispatch(gotMovies([]));
  }

  dispatch(gotMoviesLoading());
  const movies = await getMovies(inputValue);
  const mappedMovies = movies.map(movie => ({
    ...movie,
    favorite: !!getState().favorites.movies.find(m => m.id === movie.id)
  }));
  dispatch(gotMovies(mappedMovies));
};
