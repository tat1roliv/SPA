import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//const root = ReactDOM.createRoot(document.getElementById('root'));

const prato_principal = <h1>Feijoada.</h1>; 
const sobremesa = <h2>Pé de moleque.</h2>;

ReactDOM.render([prato_principal, sobremesa], document.getElementById('root'));

//root.render(
  //<React.StrictMode>
   // <App />
  //</React.StrictMode>
//);


reportWebVitals();
