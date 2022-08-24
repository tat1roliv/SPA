import React from 'react';
import { useState } from 'react';

const InputComState = () => {

    const [ name, setName ] = useState('Ada');

    const handleInput = (event) => {
        setName(event.target.value) 
    }

  return (
    <div>
        <label>Nome:</label>
        <input type="text" value={name} onChange={handleInput}/> 
        <p>exibe nome (atualiza com state): {name}</p>
    </div>
  )
}

export default InputComState;
