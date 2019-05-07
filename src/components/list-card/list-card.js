import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CommentForm from '../comment-form';
import { imagePath } from '../../services/movieDB';
import styles from './list-card.scss';

const ListCard = ({
  poster_path,
  title,
  overview,
  listId,
  id,
  deleteMovie,
  vote_average,
  release_date,
  comment
}) => {
  const [openCommentForm, setOpenCommentForm] = useState(false);

  return (
    <div className="card mb-5">
      <img className="card-img-top" src={`${imagePath}${poster_path}`} alt={title} />
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <div className="mb-2">
          <strong>{`Rating: ${vote_average}`}</strong>
        </div>
        <div className="mb-2">
          <em>{`Date: ${release_date}`}</em>
        </div>
        <div className="mb-2">{comment ? `Comment: ${comment}` : 'No comments yet'}</div>
        <p className={styles.text}>{overview}</p>
        <div className="clearfix">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => setOpenCommentForm(!openCommentForm)}
          >
            {openCommentForm ? 'Close form' : comment ? 'Edit comment' : 'Add comment'}
          </button>
          <button
            type="button"
            className="btn btn-danger float-right"
            onClick={() => deleteMovie(listId, id)}
          >
            Delete
          </button>
        </div>
        {openCommentForm && <CommentForm initialComment={comment} movieId={id} listId={listId} />}
      </div>
    </div>
  );
};

ListCard.propTypes = {
  poster_path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  listId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  vote_average: PropTypes.number.isRequired,
  release_date: PropTypes.string.isRequired,
  deleteMovie: PropTypes.func.isRequired,
  comment: PropTypes.string
};

ListCard.defaultProps = {
  comment: ''
};

export default ListCard;
