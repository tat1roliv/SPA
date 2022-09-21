import React from 'react';
import './CardFilme.css'

const CardFilme = ({filme}) => {
  return (
    <div className="card">
      <img src={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/"+ filme.poster_path} alt="test"/>
      <p>{filme.title}</p>
      <span>✨ {filme.score}</span>
      <a href="#">Detalhes</a>

    </div>
  )
}

export default CardFilme
