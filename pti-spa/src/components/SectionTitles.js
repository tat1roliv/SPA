import React from 'react';
import PropTypes from 'prop-types';

const SectionTitles = ( {title, subtitle} ) => {
  return ( 
    <div className="row justify-content-center align-items-center py-5">
        <div className="col-12 text-center">
            <h1>{title}</h1>
            <p className="text-muted">{subtitle}</p>
        </div>
    </div>
  );
} 

SectionTitles.defaultProps = {
    title: 'Articles and useful tips', 
    subtitle: 'Read on for useful information about tasty and healthy food. Interesting events and recipes. New meal plans and specialized diets for weight lass or gain.'
}
  
SectionTitles.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
};

export default SectionTitles;
