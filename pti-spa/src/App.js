import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SectionTitles from './components/SectionTitles';
import CardDeck from './components/CardDeck'

function App() {  
  return (
    <div className="container">
      <SectionTitles key={"sectionTitles"} />
      <CardDeck/>
    </div>
  );
}

export default App;
