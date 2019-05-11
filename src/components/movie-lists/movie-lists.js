import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Alert from '../alert';

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
    <Alert type="warning">This movie has not been added to a list yet</Alert>
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
