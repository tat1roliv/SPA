import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';


function BasicForm() {

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event)
  }

  return (
    <div>
        
        <form onSubmit={handleSubmit} className="form-container">
          <p>form 01</p>
          <br/>
          <label htmlFor="nome">Nome: </label>
          <input 
            id="nome"
            type="text"
            name="nome"
            value={nome}
            onChange={ (event) => setNome(event.target.value)}
          />
          {nome && ( <p>{nome}</p>) }
          <hr />
          <label htmlFor="email">Email: </label>
          <input 
            id="email"
            type="text"
            name="email"
            value={email}
            onChange={ (event) => setEmail(event.target.value)}
          />

          <button>Enviar</button>
        </form>
    </div>
  );
}

export default BasicForm;
