import React from 'react';
import Card from './Card.jsx';

const CardDeck = () => {
  return ( 
    <div className="row flex-column flex-lg-row justify-content-center align-items-center">
        <div className="col-12 col-lg-4">
            <Card />
        </div> 
        <div className="col-12 col-lg-4">
            <Card />
        </div> 
        <div className="col-12 col-lg-4">
            <Card />
        </div> 
    </div>
  );
} 


export default CardDeck;
