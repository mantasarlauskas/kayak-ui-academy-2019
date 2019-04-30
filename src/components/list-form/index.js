import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ListForm = ({ history, submitForm, list, id }) => {
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
  list: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  }),
  id: PropTypes.number
};

ListForm.defaultProps = {
  id: null,
  list: null
};

export default ListForm;
