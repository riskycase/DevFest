import React from 'react';
import Styles from './Hackathon.module.scss';
import hackathon from '../../assets/img/hack.png';

const Hackathon = () => {
   return (
      <div className={Styles.card}>
         <div className={Styles.hack}>
            <p>Register for the amazing sessions and the hackathon</p>
            <button>Register now</button>
         </div>
         <img src={hackathon} alt="Hackathon" />
      </div>
   );
};

export default Hackathon;
