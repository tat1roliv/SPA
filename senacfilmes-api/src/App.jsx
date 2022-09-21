import './App.css'
import CardFilme from './components/CardFilme'

function App() {


  const dados = [
    {
      poster_path: 'q54qEgagGOYCq5D1903eBVMNkbo.jpg',
      title:'Sandman',
      score: 99,
    },
    {
      poster_path: '5xiUqrCFgT6wU2KzynZMu5CXkM6.jpg',
      title:'Stranger Things',
      score: 98,
    },
    {
      poster_path: 'jrxOAXQDIKAhEYtcbD7fpTbnhHM.jpg',
      title:'Dark',
      score: 97,
    }
  ]

  return (
    <section className="container">

      {dados.map( (filme) => <CardFilme filme={filme} />)}
      
    </section>  
  )
}

export default App
