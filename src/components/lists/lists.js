import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import HeaderWrapper from '../header-wrapper';
import Autocomplete from '../autocomplete';

import styles from './lists.scss';

const Lists = ({ setMovie, history, setLists, list, isLoading }) => {
  useEffect(() => {
    setLists();
  }, []);

  return (
    <div className={styles.container}>
      <HeaderWrapper>
        <Autocomplete
          handleSelect={movie => {
            setMovie(movie);
            history.push('/');
          }}
        />
      </HeaderWrapper>
      {isLoading ? (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      ) : (
        list.map(({ id }) => (
          <div>
            {id}
            <Link to={`/edit-list/${id}`}>Edit</Link>
          </div>
        ))
      )}
    </div>
  );
};

Lists.propTypes = {
  setMovie: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  setLists: PropTypes.func.isRequired,
  list: PropTypes.shape({
    id: PropTypes.number.isRequired
  }).isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default Lists;
