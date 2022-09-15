import React from 'react';

const Radio = () => {
  const [produto, setProduto] = React.useState('');

  function handleChange({ target }) {
    setProduto(target.value);
  }

  return (
    <form className="form-container">

      <h2>Produtos</h2>
      <label> Smartphone
        <input
          type="radio"
          onChange={handleChange}
          checked={produto === 'smartphone'}
          value="smartphone"
        />
      </label>

      <label>Notebook
        <input
          type="radio"
          onChange={handleChange}
          checked={produto === 'notebook'}
          value="notebook"
        />
      </label>

      {produto}

    </form>
  );
};

export default Radio;
