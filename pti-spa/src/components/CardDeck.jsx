import React from 'react';
import Card from './Card.jsx';

import image1 from '../assets/pexels-photo-1.jpeg';
import image2 from '../assets/pexels-photo-2.jpeg';
import image3 from '../assets/pexels-photo-3.jpeg';

const CardDeck = () => {

    const cards = [
        {
            id: 1,
            image: image1,
            title: 'New seafood recipe perfect for losing weight.',
            description: 'Mass comunication strategies to continue focusing on brand awareness.',
            url: 'https://tatioliveira.tech/',
        },
        {
            id: 2,
            image: image2,
            title: 'Balance os proteins, fats and carbo. How do I get it?',
            description: 'Mass comunication strategies to continue focusing on brand awareness.',
            url: 'https://tatioliveira.tech/',
        },
        {
            id: 3,
            image: image3,
            title: 'The importance of proper and healthy eating.',
            description: 'Mass comunication strategies to continue focusing on brand awareness.',
            url: 'https://tatioliveira.tech/',
        },
    ]
  return ( 
    <div className="row flex-column flex-lg-row justify-content-center align-items-center">
        
        {
            cards.map( (card) => (
                <div className="col-12 col-lg-4">
                    <Card 
                        key={card.id} 
                        title={card.title} 
                        description={card.description}
                        url={card.url}
                        image={card.image}
                        />
                </div> 
            ))
        }

    </div>
  );
} 


export default CardDeck;
