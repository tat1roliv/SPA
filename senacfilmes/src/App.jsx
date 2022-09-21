import './App.css'
import CardFilme from './components/CardFilme'

function App() {

  const sandman = {
    poster_path: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q54qEgagGOYCq5D1903eBVMNkbo.jpg',
    title:'Sandman',
    score: 99,
  }

  const stranger = {
    poster_path: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5xiUqrCFgT6wU2KzynZMu5CXkM6.jpg',
    title:'Stranger Things',
    score: 98,
  }

  const dark = {
    poster_path: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jrxOAXQDIKAhEYtcbD7fpTbnhHM.jpg',
    title:'Dark',
    score: 97,
  }

  return (
    <section className="container">
      <CardFilme filme={sandman} />
      <CardFilme filme={dark} />
      <CardFilme filme={stranger} />
    </section>  
  )
}

export default App
