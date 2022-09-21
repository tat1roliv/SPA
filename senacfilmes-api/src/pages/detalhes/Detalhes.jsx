import React from 'react';
import './Detalhes.css';

const Detalhes = ({filme}) => {

  return (
    <section className="container-details"> 
      <img src={"https://www.themoviedb.org/t/p/original/"+ filme.backdrop_path}/>
      <h1>{filme.name}</h1>
      <p>{filme.overview}</p>
    </section>
  )
}

export default Detalhes
