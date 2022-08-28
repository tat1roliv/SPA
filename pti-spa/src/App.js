import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

import SectionTitles from './components/SectionTitles.jsx';
import CardDeck from './components/CardDeck.jsx'


function App() {
  return (
    <div className="container">
      <SectionTitles />
      <CardDeck/>
    </div>
  );
}

export default App;
