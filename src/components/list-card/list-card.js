import React from 'react';
import PropTypes from 'prop-types';
import { imagePath } from '../../services/movieDB';

const ListCard = ({
  poster_path,
  title,
  overview,
  listId,
  id,
  deleteMovie,
  vote_average,
  release_date
}) => (
  <div className="card" style={{ width: '18rem' }}>
    <img className="card-img-top" src={`${imagePath}${poster_path}`} alt={title} />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{overview}</p>
      <p className="card-text">
        Rating:
        {vote_average}
      </p>
      <p className="card-text">
        Date:
        {release_date}
      </p>
      <button type="button" className="btn btn-danger" onClick={() => deleteMovie(listId, id)}>
        Remove from this list
      </button>
    </div>
  </div>
);

ListCard.propTypes = {
  poster_path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  listId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  vote_average: PropTypes.number.isRequired,
  release_date: PropTypes.string.isRequired,
  deleteMovie: PropTypes.func.isRequired
};

export default ListCard;
