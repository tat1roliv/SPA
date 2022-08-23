import React, { Component } from 'react';

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
    <h1>Lista de Livros</h1>
  </div>
);
}
}

export default App;
