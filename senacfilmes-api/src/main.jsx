import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import './index.css';
import Detalhes from './pages/detalhes/Detalhes';


const filme = {
  "adult": false,
  "backdrop_path": "/3UbHGmu9vIMSC5uNfnGt7DjetqT.jpg",
  "id": 105248,
  "name": "Cyberpunk: Edgerunners",
  "original_language": "ja",
  "original_name": "サイバーパンク：エッジランナーズ",
  "overview": "In a dystopia riddled with corruption and cybernetic implants, a talented but reckless street kid strives to become a mercenary outlaw — an edgerunner.",
  "poster_path": "/7jSWOc6jWSw5hZ78HB8Hw3pJxuk.jpg",
  "media_type": "tv",
  "genre_ids": [
  16,
  10759,
  10765
  ],
  "popularity": 620.599,
  "first_air_date": "2022-09-13",
  "vote_average": 8.729,
  "vote_count": 155,
  "origin_country": [
  "JP"
  ]
  }

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
    <Router>
      <Routes>
        <Route exact path="/" element={ <App/> } />
        <Route path="/detalhes" element={ <Detalhes filme={filme}/> } />
      </Routes>
    </Router>
    
  </React.StrictMode>
)
