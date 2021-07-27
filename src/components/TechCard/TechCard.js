import React from 'react';
import PropTypes from 'prop-types';
import Styles from './TechCard.module.scss';

const TechCard = ({ title, img_url }) => {
   const img = require('../../' + img_url);
   return (
      <div className={Styles.card}>
         <img src={img.default} className={Styles.image} alt={title} />
         <div className={Styles.title}>{title}</div>
      </div>
   );
};

TechCard.propTypes = {
   title: PropTypes.string,
   img_url: PropTypes.string,
};

export default TechCard;
