import React, { Component } from 'react';
import ContadorComState from './components/ContadorComState'
import InputComState from './components/InputComState';
import Header from './components/Header';

export class App extends Component { state = {

  books: [
  {
  id: '1',
  author: 'Leo Tolstoy', title: 'Guerra e Paz', pages: 1296,
  year_1st_ed: 1867,
  },
  {
  id: '2',
  author: 'Malba Tahan',
  title: 'O Homem Que Calculava', pages: 286,
  year_1st_ed: 1938,
  },
  ],
  
  };

render() {
return (
  <div className="container">
    <Header title="Lista de Livros2" />
    <ContadorComState />
    <InputComState />

  </div>
);
}
}

export default App;
