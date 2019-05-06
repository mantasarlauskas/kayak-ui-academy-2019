import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../spinner';
import styles from './list-form.scss';

const ListForm = ({ history, submitForm, lists, id }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (lists && lists.array.length > 0) {
      const list = lists.array.find(({ id: listId }) => listId === parseInt(id, 10));
      if (list) {
        setName(list.name);
        setDescription(list.description);
      }
    }
  }, [lists]);

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
      {lists && lists.isLoading ? (
        <Spinner />
      ) : lists && (!name && !description) ? (
        <div className="alert alert-danger mt-3 text-centered">This list does not exist</div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h3 className="text-centered mt-3">List form</h3>
          {error && (
            <div className="text-centered alert alert-danger mt-3">All fields must be filled</div>
          )}
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
                resize="none"
              />
            </label>
          </div>
          <button type="submit" className={`btn btn-primary ${styles.submitButton}`}>
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
  lists: PropTypes.shape({
    array: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
      })
    ),
    isLoading: PropTypes.bool.isRequired
  }),
  id: PropTypes.number
};

ListForm.defaultProps = {
  id: null,
  lists: null
};

export default ListForm;
