import React from 'react'

const Produtos = () => {

    const produtos = [
        { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
        { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
      ];

  return (
    <div>
        <h2>Produtos</h2>
        {produtos.map((produto) => (
            <li key={produto.nome}>{produto.nome}, {produto.propriedades}</li>
        ))}

    </div>
  )
}

export default Produtos