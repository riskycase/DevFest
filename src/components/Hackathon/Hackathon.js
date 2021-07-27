import React from 'react';
import Styles from './Hackathon.module.scss';
import hackathon from '../../assets/img/hack.png';
import Button from '../Button/Button.js';
const Hackathon = () => {
   return (
      <div className={Styles.card}>
         <div className={Styles.hack}>
            <h5 className={Styles.h5}>
               Register for the amazing sessions and the hackathon
            </h5>
            <div className={Styles.align}>
               <Button text="Register Now" color="primary" />
            </div>
         </div>
         <div className={Styles.image_container}>
            <img src={hackathon} className={Styles.image} alt="Hackathon" />
         </div>
      </div>
   );
};

export default Hackathon;
