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
      {error && <div className="alert alert-danger mt-3">Field must not be empty</div>}
      <div className="form-group mt-3">
        <label className="w-100" htmlFor="comment">
          Comment
          <input
            id="comment"
            type="text"
            value={comment}
            className="form-control mt-2"
            onChange={({ target: { value } }) => setComment(value)}
          />
        </label>
      </div>
      <button type="submit" className="btn btn-primary">
        Submit
      </button>
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
  initialComment: ''
};

export default CommentForm;
