import './App.css'
import CardFilme from './components/CardFilme'
import useAxios from 'axios-hooks';
import CircularProgress from '@mui/material/CircularProgress';
import ErrorIcon from '@mui/icons-material/Error'

function App() {

  const url = "https://api.themoviedb.org/3/trending/tv/day?api_key=343dafa5829c90e338b80eac28ed7a72";
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
  

  const dados = data.results
  /*
  [
    {
      poster_path: 'q54qEgagGOYCq5D1903eBVMNkbo.jpg',
      title:'Sandman',
      score: 99,
    },
    {
      poster_path: '5xiUqrCFgT6wU2KzynZMu5CXkM6.jpg',
      original_title:'Stranger Things',
      score: 98,
    },
    {
      poster_path: 'jrxOAXQDIKAhEYtcbD7fpTbnhHM.jpg',
      title:'Dark',
      score: 97,
    }
  ]
  */

  return (
    <section className="container">

      {dados.map( (filme) => <CardFilme filme={filme} />)}
      
    </section>  
  )
}

export default App
