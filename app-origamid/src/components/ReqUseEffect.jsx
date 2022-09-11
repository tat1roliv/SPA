import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const BtnUseEffect = () => {

    const [contar, setContar ] = useState(0);
    const [data, setData] = useState(null);

    React.useEffect( () => {
        fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
        .then((response) => response.json())
        .then((json) => setData(json))
    }, []);

  return (
    <div>
        {data && (
            <div>
                <h1>{data.nome}</h1>
                <p>{data.preco * contar}</p>
            </div>
        )}
       <button onClick={()=>setContar(contar + 1)}>{contar}</button>
    </div>
  )
}

export default BtnUseEffect
