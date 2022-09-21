import React from 'react';
import { useParams } from 'react-router-dom';
import './Detalhes.css';
import useAxios from 'axios-hooks';
import CircularProgress from '@mui/material/CircularProgress';
import ErrorIcon from '@mui/icons-material/Error'


const Detalhes = () => {

  const {id} = useParams();

const url = `https://api.themoviedb.org/3/tv/${id}?api_key=343dafa5829c90e338b80eac28ed7a72`;
  const [ { data, loading, error }] = useAxios(url);

  if(loading) return ( 
  <div>
    <CircularProgress />
    <h2>buscando dados...</h2>
  </div>
  )

  if(error) return ( 
    <div>
      <ErrorIcon />
      <h2>erro ao buscar dados! <br/> {error.message} </h2>
    </div>
    )
  

  const filme = data

  return (
    <section className="container-details"> 
      <img src={"https://www.themoviedb.org/t/p/original/"+ filme.backdrop_path}/>
      <h1>{filme.name}</h1>
      <p>{filme.overview}</p>
    </section>
  )
}

export default Detalhes
