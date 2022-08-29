import React from 'react';

const Card = ({ image, title, description, url}) => {
    
  return ( 
    <div className="card ">
        <img src={image} className="card-img-top rounded-4" alt="alt-image"/>
        <h5 className="card-title pt-3 px-3">{title}</h5>
        <p className="card-text py-1 px-3">{description}</p>
        <a href={url} className="link pb-4 px-3 text-bold">Read more</a>
    </div>
  );
} 


export default Card;
