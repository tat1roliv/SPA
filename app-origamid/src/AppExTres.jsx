import React from 'react'
import Produtos from './components/Produtos';
import Home from './components/Home';
import Header from './components/Header';

const AppExTres = () => {

    const { pathname } = window.location; 
    
    let Pagina;

    if(pathname === '/produtos') {
        Pagina = Produtos;
    } else {
        Pagina = Home;
    }

  return (
    <div>
        <Header />
        <Pagina />
    </div>
  )
}

export default AppExTres