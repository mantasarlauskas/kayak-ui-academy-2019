import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from '../spinner';
import styles from './lists.scss';

const Lists = ({ lists, isLoading }) => (
  <div className={styles.container}>
    {isLoading ? (
      <Spinner />
    ) : (
      lists.map(({ id, name, description }) => (
        <div key={id}>
          <Link to={`/list/${id}`}>{`${name} ${description}`}</Link>
          <Link to={`/edit-list/${id}`}>Edit</Link>
        </div>
      ))
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
  isLoading: PropTypes.bool.isRequired
};

export default Lists;
