import request from 'supertest';
import { getMoviesList, urlV4, readAccessToken } from '../movieDB';

describe('Movie DB API', () => {
  describe('getRequestToken', () => {
    it('should return response with status 200', async () => {
      await request(urlV4)
        .post('/auth/request_token')
        .set('Authorization', `Bearer ${readAccessToken}`)
        .expect(200);
    });

    it('should return response with status 401', async () => {
      await request(urlV4)
        .post('/auth/request_token')
        .expect(401);
    });
  });

  describe('getMoviesList', () => {
    let ids;

    it('should return all movies', async () => {
      ids = [300248, 219874, 12444];
      const movies = await getMoviesList(ids);
      expect(movies.length).toBe(ids.length);
    });

    it('should return all movies with same ids', async () => {
      const errors = [];
      ids = [300248, 219874, 12444];
      const movies = await getMoviesList(ids);
      ids.forEach(id => {
        if (!movies.find(({ id: movieId }) => movieId === id)) {
          errors.push(`ID: ${id} was not found in movies list`);
        }
      });
      expect(errors).toEqual([]);
    });

    it('should return zero movies', async () => {
      const movies = await getMoviesList([]);
      expect(movies.length).toBe(0);
    });
  });
});
