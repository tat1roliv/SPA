import React, { useState } from 'react';

const Formulario = () => {

const [username, setUsername] = useState('Insira seu nome');
const [departamento, setDepartamento] = useState('');
const [mensagem, setMensagem] = useState('Digite aqui a requisição...');

const resetDefault = () => { 
    setUsername('Insira seu nome'); 
    setDepartamento('');
    setMensagem('Digite aqui a requisição...');
};
    
const onSubmit = (e) => { 
    e.preventDefault();
    alert('Dados enviados com sucesso!'); 
    resetDefault(); 
    document.getElementById('myForm').reset();
};

return (
<div className="container d-flex justify-content-center align-items-center">
<form id="myForm" className="form" onSubmit={onSubmit}>
    <div className="inputfield form-row mb-3">
        <label htmlFor="nameform" />Nome:
        <input
        type="text" 
        id="nameform" name="nameform" 
        className="input" 
        placeholder={username}
        onChange={(e) => setUsername(e.target.value)}
        />
    </div>

    <div className="inputfield form-row mb-3">
        <label htmlFor="selform"/>Departamento:
        <div className="custom_select ">
            <select id="selform"
            onChange={(e) => setDepartamento(e.target. value)}>
            <option value="">...</option>
            <option value="Financeiro">Financeiro</option>
            <option value="RH">RH</option>
            <option value="TI">TI</option>
            </select>
        </div>
    </div>
    <div className="inputfield form-row mb-3">
        <label htmlFor="msgform"/>Descrição
        <textarea
            id="msgform" 
            className="textarea" 
            placeholder={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
        >
        </textarea>
    </div>

    <div className="inputfield form-row my-4 px-0">
        <button className="btn btn-primary" type="submit">
            Enviar
        </button>
    </div>
</form>
</div>
);
};

export default Formulario;