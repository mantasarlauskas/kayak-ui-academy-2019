import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieLists = ({ movieLists }) =>
  movieLists.length > 0 ? (
    <Fragment>
      <h6 className="text-centered">Movie belongs to these lists:</h6>
      <ul className="list-group">
        {movieLists.map(({ name, id }) => (
          <li className="list-group-item" key={id}>
            <Link to={`/list/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </Fragment>
  ) : (
    <div className="alert alert-warning mt-3">This movie has not been added to a list yet</div>
  );

MovieLists.propTypes = {
  movieLists: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    })
  ).isRequired
};

export default MovieLists;
