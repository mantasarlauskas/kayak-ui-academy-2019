export const SELECT_MOVIE = 'SELECT_MOVIE';
export const RESET_MOVIE = 'RESET_MOVIE';

export const setMovie = movie => ({
  type: SELECT_MOVIE,
  movie
});

export const resetMovie = () => ({
  type: RESET_MOVIE
});
