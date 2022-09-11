import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const ReqUseEffect = () => {

    
    const [contar, setContar ] = useState(0)

    const titulo = 'clicou'

    React.useEffect( () => {
        document.title = titulo + contar;
    }, [contar]);


  return (
    <div>
       <button onClick={()=>setContar(contar + 1)}>{contar}</button>
    </div>
  )
}

export default ReqUseEffect
