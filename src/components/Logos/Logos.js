import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Logos.module.scss';

function Logos({ array }) {
   return array.map((company, index) => (
      <a key={index} href={company.link} title={company.name}>
         <img
            src={company.image}
            className={Styles.logos}
            alt={company.name}
            style={company.style}
         />
      </a>
   ));
}

Logos.protoTypes = PropTypes.arrayOf({
   image: PropTypes.string,
   name: PropTypes.string,
   link: PropTypes.string,
});

export default Logos;
