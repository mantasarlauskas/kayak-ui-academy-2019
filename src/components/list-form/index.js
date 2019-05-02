import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Spinner from '../spinner';

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

  return lists && lists.isLoading ? (
    <Spinner />
  ) : lists && (!name && !description) ? (
    <div>tokio jusu listo nera</div>
  ) : (
    <form onSubmit={handleSubmit}>
      {error && <div>laukeliu tusciu negali buti!!</div>}
      <input type="text" name="name" value={name} onChange={handleChange} />
      <textarea name="description" value={description} onChange={handleChange} resize="none" />
      <button type="submit">Submit</button>
    </form>
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
