import React from 'react';
import background from '../../assets/img/background.svg';
import Styles from './Homepage.module.scss';

export const Bg = () => {
   return (
      <img src={background} className={Styles.background} alt="background" />
   );
};
