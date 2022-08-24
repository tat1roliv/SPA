import React from 'react';
import { useState } from 'react';

const BtnUseState = () => {

    const [ ativo, setAtivo ] = useState(false);

    const handleAtivo = () => {
        setAtivo( !ativo );
    }



  return (
    <div>
      <button onClick={handleAtivo}>{ativo ? 'ativo' : 'inativo'}</button>
    </div>
  )
}

export default BtnUseState;