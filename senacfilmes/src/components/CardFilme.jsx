import React from 'react';
import './CardFilme.css';
import { useState} from 'react';

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';

const CardFilme = ({filme}) => {

  const [favorite, setFavorite] = useState(false);

  function toogleFavorite() {
    setFavorite(!favorite);
  }

  return (
    <div className="card">
      {favorite ? 
        <FavoriteIcon onClick={toogleFavorite} className="icon-favorite"/> 
        : 
        <FavoriteBorderOutlinedIcon onClick={toogleFavorite} className="icon-favorite"/>
      }
      <img src={"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/"+ filme.poster_path} alt="test"/>
      <p>{filme.title}</p>
      <span>✨ {filme.score}</span>
      <a href="#">Detalhes</a>

    </div>
  )
}

export default CardFilme
