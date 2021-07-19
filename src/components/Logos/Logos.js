import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Logos.module.scss';

function Logos({ array }) {
   return array.map((image, index) => (
      <img
         key={index}
         src={image.path}
         className={Styles.logos}
         alt={image.alt}
      />
   ));
}

Logos.protoTypes = PropTypes.arrayOf({
   path: PropTypes.string,
   alt: PropTypes.string,
});

export default Logos;
