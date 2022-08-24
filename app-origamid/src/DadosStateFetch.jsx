import React from 'react';
import { useState } from 'react';

const DadosStateFetch = () => {

    const [dados, setDados] = useState(null);

    async function handleClick(event){
        const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,
        );
        console.log(response);
    }

  return (
    <div>
    
        <button onClick={handleClick}>notebook</button>
        <button onClick={handleClick}>smartphone</button>
        <button onClick={handleClick}>tablet</button>

    </div>
  )
}

export default DadosStateFetch