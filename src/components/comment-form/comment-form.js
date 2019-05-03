import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const CommentForm = ({ initialComment, addMovieComment, movieId, listId }) => {
  const [comment, setComment] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (initialComment) {
      setComment(initialComment);
    }
  }, [initialComment]);

  const handleSubmit = e => {
    e.preventDefault();
    if (comment === '') {
      setError(true);
    } else {
      addMovieComment(listId, movieId, comment);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div>negali buti tusciu laukeliu</div>}
      <input type="text" value={comment} onChange={({ target: { value } }) => setComment(value)} />
      <button type="submit">submit</button>
    </form>
  );
};

CommentForm.propTypes = {
  initialComment: PropTypes.string,
  addMovieComment: PropTypes.func.isRequired,
  movieId: PropTypes.number.isRequired,
  listId: PropTypes.number.isRequired
};

CommentForm.defaultProps = {
  initialComment: null
};

export default CommentForm;
