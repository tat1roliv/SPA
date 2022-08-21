
import React from 'react';

function AppExUm() {

  const luana = {
    cliente: 'Luana',
    idade: 27,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
    ],
    ativa: true,
  };
  
  const mario = {
    cliente: 'Mario',
    idade: 31,
    compras: [
      { nome: 'Notebook', preco: 'R$ 2500' },
      { nome: 'Geladeira', preco: 'R$ 3000' },
      { nome: 'Smartphone', preco: 'R$ 1500' },
      { nome: 'Guitarra', preco: 'R$ 3500' },
    ],
    ativa: false,
  };

  const dados = luana;

  const total = dados.compras.map( item => Number(item.preco.replace("R$ ", ""))).reduce((a, b) => a + b);

  return (
    <div>
      <p>exibe dados de objeto selecionado</p>
      <p>Nome: { dados.cliente }</p>
      <p>Idade: { dados.idade }</p>
      <p>Total de compras R$: { total } </p>
      <p style={  { color: dados.ativa ? 'green' : 'red' } } >Situação: {dados.ativa ? 'ativa' : 'inativo'}</p>
      { (total>10000) && <p>gastou 10</p> }
    </div>
  );
}

export default AppExUm;
