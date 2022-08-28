import React from 'react';
import PropTypes from 'prop-types';

const LivroItem = ({ livro }) => {

const { title, author, pages, year_1st_ed } = livro;

return (

<div className="itemLivro">
    <h3>{title}</h3>
    <h4>{author}</h4>
    <p>Páginas: {pages}</p>
    <p>Ano da 1ª edição: {year_1st_ed}</p>
</div>
);
};

// Validando prop com propTypes e tornando-a obrigatória 
LivroItem.propTypes = {
    livro: PropTypes.object.isRequired,
};

export default LivroItem;