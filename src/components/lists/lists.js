import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../spinner';
import styles from './lists.scss';

const Lists = ({ lists, isLoading, removeList }) => (
  <div className={styles.container}>
    <Link to="/add-list" style={{ width: '10rem' }} className="btn btn-primary">
      Add new list
    </Link>
    {isLoading ? (
      <Spinner />
    ) : lists.length > 0 ? (
      lists.map(({ id, name, description }) => (
        <div key={id}>
          <Link to={`/list/${id}`}>{`${name} ${description}`}</Link>
          <Link className="btn btn-primary" to={`/edit-list/${id}`}>
            Edit
          </Link>
          <button className="btn btn-danger" type="button" onClick={() => removeList(id)}>
            Remove
          </button>
        </div>
      ))
    ) : (
      <div className="alert alert-warning mt-3">There are no lists yet</div>
    )}
  </div>
);

Lists.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  lists: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  ).isRequired,
  isLoading: PropTypes.bool.isRequired,
  removeList: PropTypes.func.isRequired
};

export default Lists;
