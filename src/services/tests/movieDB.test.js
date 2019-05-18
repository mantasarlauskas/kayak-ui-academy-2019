import request from 'supertest';
import { getMoviesList, urlV4, readAccessToken } from '../movieDB';

describe('Movie DB API', () => {
  describe('getRequestToken', () => {
    it('should return response with status 200', () => {
      request(urlV4)
        .post('/auth/request_token')
        .set('Authorization', `Bearer ${readAccessToken}`)
        .expect(200);
    });

    it('should return response with status 401', () => {
      request(urlV4)
        .post('/auth/request_token')
        .expect(401);
    });
  });

  describe('getMoviesList', () => {
    let ids;
    let movies;

    it('should return all movies', async () => {
      ids = [300248, 219874, 12444];
      movies = await getMoviesList(ids);
      expect(movies.length).toBe(ids.length);
    });

    it('should return all movies with same ids', async () => {
      const errors = [];
      ids = [300248, 219874, 12444];
      movies = await getMoviesList(ids);
      ids.forEach(id => {
        const index = movies.findIndex(({ id: movieId }) => movieId === id);
        if (index === -1) {
          errors.push(`ID: ${id} was not found in movies list`);
        } else {
          movies.splice(index, 1);
        }
      });
      expect(errors).toEqual([]);
    });

    it('should return zero movies', async () => {
      movies = await getMoviesList([]);
      expect(movies.length).toBe(0);
    });
  });
});
