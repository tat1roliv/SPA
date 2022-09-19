import React, { useState } from 'react';

const Formulario = () => {

const [username, setUsername] = useState('Insira seu nome');

return (
<div className="container d-flex justify-content-center align-items-center">
<form id="myForm" className="form">
    <div className="inputfield form-row">
        <label htmlFor="nameform" />Nome:
        <input
        type="text" 
        id="nameform" name="nameform" 
        className="input" 
        placeholder={username}
        />
    </div>
    <div className="inputfield form-row my-3 px-0">
        <button className="btn btn-primary" type="submit">
        Enviar
        </button>
    </div>
</form>
</div>
);
};

export default Formulario;