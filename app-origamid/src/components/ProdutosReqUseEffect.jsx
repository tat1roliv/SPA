import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const ProdutosReqUseEffect = ( { produto } ) => {

    const [data, setData] = useState(null);

    React.useEffect( () => {
        if(produto !== null)
        fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
        .then((response) => response.json())
        .then((json) => setData(json))
    }, []);

  return (
    <div>
        {
            <div>
                <h1>{data.nome}</h1>
                <p>{data.preco}</p>
            </div>
        }
      
    </div>
  )
}

export default ProdutosReqUseEffect
