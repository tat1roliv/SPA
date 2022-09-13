import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';


function FetchForm() {

    const formFields = [
        {
            id: 'nome',
            label: 'Nome',
            type: 'text',
        },
        {
            id: 'email',
            label: 'Email',
            type: 'email',
        },
        {
            id: 'senha',
            label: 'Senha',
            type: 'password',
        },
        {
            id: 'cep',
            label: 'Cep',
            type: 'text',
        },
        {
            id: 'rua',
            label: 'Rua',
            type: 'text',
        },
        {
            id: 'numero',
            label: 'Numero',
            type: 'text',
        },
        {
            id: 'bairro',
            label: 'Bairro',
            type: 'text',
        },
        {
            id: 'cidade',
            label: 'Cidade',
            type: 'text',
        },
        {
            id: 'estado',
            label: 'Estado',
            type: 'text',
        },
    ]

  const [form, setForm] = useState({
    nome: '',
    email: '',
    rua: '',
    bairro: '',
    cidade: '',
    estado: '',
  });

  const [response, setResponse] = useState(null)

  function handleSubmit(event){
    event.preventDefault();
    fetch('https://ranekapi.origamid.dev/json/api/usuario', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(form),
    }).then((response) => { 
        setResponse(response)
        console.log(response)
    })
  }

  function handleChange( {target} ) {
    const {id, value} = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <div>
        
        <form onChange={handleSubmit}
        className="form-container">
          <p>form com fetch</p>
          <br/>

          {formFields.map( ( { id, label, type } ) => (

            <div key={id}>
                <label htmlFor={id}>{label}</label>
                <input 
                    id={id}
                    type={type}
                    value={form[id]}
                    onChange={ handleChange }
                />
            </div>
          ))}
          
            { response && response.ok && <p>enviado!</p>}
          <button>Enviar</button>
        </form>
    </div>
  );
}

export default FetchForm;
