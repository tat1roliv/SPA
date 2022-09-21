import React from 'react';
import './CardFilme.css'

const CardFilme = (props) => {
  return (
    <div className="card">
      <img src={props.filme.poster_path} alt="test"/>
      <p>{props.filme.title}</p>
      <span>✨ {props.filme.score}</span>
      <a href="#">Detalhes</a>

    </div>
  )
}

export default CardFilme
