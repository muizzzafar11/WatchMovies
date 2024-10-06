import React from 'react';
import './Card.css';

function Card({ title, image, overview, releaseYear, rating }) {
  return (
    <div className="card">
      <img src={image} alt={title} style={{ width: '150px', height: '225px' }} />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{overview}</p>
        <p>Release Year: {releaseYear}</p>
        <p>Rating: {rating}</p>
      </div>
    </div>
  );
}

export default Card;
