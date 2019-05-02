import React from 'react';
import { imagePath } from '../../services/movieDB';

const ListCard = ({ poster_path, title, overview }) => (
  <div className="card" style={{ width: '18rem' }}>
    <img className="card-img-top" src={`${imagePath}${poster_path}`} alt={title} />
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{overview}</p>
      <a href="#" className="btn btn-primary">
        Go somewhere
      </a>
    </div>
  </div>
);

export default ListCard;
