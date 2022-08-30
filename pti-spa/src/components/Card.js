import React from 'react';
import './Card.css'

const Card = ({ image, title, description, url}) => {
    
  return ( 
    <div className="card bg-light rounded-4">
        <img src={image} className="card-img-top rounded-4" alt="alt-image"/>
        <h5 className="card-title pt-3 px-3">{title}</h5>
        <p className="card-text py-1 px-3">{description}</p>
        <a href={url} className="pb-4 px-3">Read more 	→</a>
    </div>
  );
} 


export default Card;
