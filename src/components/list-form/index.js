import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../spinner';
import Alert from '../alert';
import styles from './list-form.scss';

const ListForm = ({ history, submitForm, list, isLoading, id }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (list) {
      setName(list.name);
      setDescription(list.description);
    }
  }, [list]);

  const validateForm = () => {
    if (name === '' || description === '') {
      return false;
    }
    return true;
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (validateForm()) {
      if (id) {
        await submitForm({ name, description, id });
      } else {
        await submitForm({ name, description });
      }
      history.push('/lists');
    } else {
      setError(true);
    }
  };

  const handleChange = e => {
    if (e.target.name === 'name') {
      setName(e.target.value);
    } else {
      setDescription(e.target.value);
    }
  };

  return (
    <div className="container">
      {isLoading ? (
        <Spinner />
      ) : id && (!name && !description) ? (
        <Alert type="danger">This list does not exist</Alert>
      ) : (
        <form className="clearfix" onSubmit={handleSubmit}>
          <h3 className="text-centered mt-3">List form</h3>
          {error && <Alert type="danger">All fields must be filled</Alert>}
          <div className="form-group">
            <label className="w-100" htmlFor="name">
              Title
              <input
                className="form-control mt-2"
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="form-group">
            <label className="w-100" htmlFor="description">
              Description
              <textarea
                className="form-control mt-2"
                name="description"
                id="description"
                value={description}
                onChange={handleChange}
                rows="3"
              />
            </label>
          </div>
          <button type="submit" className={`btn btn-primary ${styles.submit} float-right`}>
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

ListForm.propTypes = {
  submitForm: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  list: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }),
  isLoading: PropTypes.bool,
  id: PropTypes.number
};

ListForm.defaultProps = {
  id: null,
  list: null,
  isLoading: false
};

export default ListForm;
