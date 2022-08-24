import React from 'react';
import { useState } from 'react';

const BtnUseState = () => {

    //useState com localstorage para definir o valor inicial
    const [ ativo, setAtivo ] = useState(() => {
        const ativo = window.localStorage.getItem('ativo');
        return ativo;
    });

    const handleAtivo = () => {
        setAtivo( (ativo) => !ativo );//usando callback
    }



  return (
    <div>
      <button onClick={handleAtivo}>{ativo ? 'ativo' : 'inativo'}</button>
    </div>
  )
}

export default BtnUseState;