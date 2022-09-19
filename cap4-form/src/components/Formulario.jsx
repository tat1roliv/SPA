import React, { useState } from 'react';
import FormPopup from './FormPopup';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Formulario = () => {

const [username, setUsername] = useState('Insira seu nome');
const [email, setEmail] = useState('Digite seu e­mail');
const [departamento, setDepartamento] = useState('');
const [mensagem, setMensagem] = useState('Digite aqui a requisição...');
const [error, setError] = useState('');
const [disabledBtn, setDisabledBtn] = useState(true);
const [trigger, setTrigger] = useState(false);

let data = {
    username: username, 
    email: email,
    departamento: departamento, 
    mensagem: mensagem,
};

const resetDefault = () => { 
    setUsername('Insira seu nome'); 
    setEmail('Digite seu e­mail'); 
    setDepartamento('');
    setMensagem('Digite aqui a requisição...'); 
    setError('');
    setDisabledBtn(true); 
    setTrigger(false);
};
    
const onSubmit = (e) => { 
    e.preventDefault(); 
    setTrigger(true);
    document.getElementById('myForm').reset();
};

const validateEmail = () => {
    var pattern = new RegExp(/.*@.*\..*/i);
    if (!pattern.test(document.getElementById('emailform').value)) {
        setError('*Entre com um e­mail válido.');
        setDisabledBtn(true);
    } else {
    setError(''); 
    setDisabledBtn(false);
    }
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

    <div className="inputfield">
        <label htmlFor="emailform" />Email:
        <div className="inputvalidate">
            <input
                type="text" 
                id="emailform" 
                name="emailform" 
                className="input" 
                placeholder={email} 
                onChange={ (e) => {
                    validateEmail(); 
                    setEmail(e.target.value);
                } } 
            />
            <div className="text­danger">{error}</div>
        </div>
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
        <button 
            className="btn btn-primary" 
            type="submit"
            disabled={disabledBtn}
            >
            Enviar
        </button>
    </div>
</form>

{
    trigger ? (
    <FormPopup
    dados={data} 
    trigger={trigger} 
    removeTrigger={resetDefault}
    />) : (<div></div>)
}

</div>
);
};

export default Formulario;