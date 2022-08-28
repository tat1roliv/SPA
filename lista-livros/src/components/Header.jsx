import React from 'react';
import PropTypes from 'prop-types';

const Header = ( props ) => {
  return (
    <div>
      <h1>{props.title}</h1>
    </div>
  )
}

// Validando props do componente 
Header.propTypes = {
  title: PropTypes.string.isRequired,
  };

export default Header
