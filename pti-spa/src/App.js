import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import SectionTitles from './components/SectionTitles.jsx';


function App() {
  return (
    <div className="container">
      <SectionTitles />

      <div className="row">
        <div className="card col-4">
            <img src="#" className="card-img-top" alt="alt-image"/>
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
    </div>
  );
}

export default App;
