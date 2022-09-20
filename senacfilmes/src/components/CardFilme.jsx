import React from 'react';
import './CardFilme.css'

const CardFilme = () => {
  return (
    <div className="card">
      <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q54qEgagGOYCq5D1903eBVMNkbo.jpg" alt="test"/>
      <p>Título do filme</p>
      <span>✨ 8</span>
      <a href="#">Detalhes</a>

    </div>
  )
}

export default CardFilme
