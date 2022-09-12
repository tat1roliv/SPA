import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';


const ProdutosUseEffect = () => {

    const [ prod, setProd ] = useState(null);

    React.useEffect( () => {
        const prodLocal = window.localStorage.getItem('produto')
        if(prodLocal !== null) setProd(prodLocal)
    }, [])


    React.useEffect( () => {
        if(prod !== null) window.localStorage.setItem('produto', prod)
    }, [prod])
    
    
    function handleClick( {target} ){
        setProd(target.innerText);
    }

  return (
    <div>
        <h1>produto selecionado: {prod} </h1>
        <button onClick={handleClick} style={{marginRight: '20px' }}>notebook</button>
        <button onClick={handleClick}>smartphone</button>
    </div>
  )
}

export default ProdutosUseEffect
