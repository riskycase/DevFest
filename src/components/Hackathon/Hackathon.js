import React from 'react';
import Styles from './Hackathon.module.scss';
import hackathon from '../../assets/img/hack.png';
const Hackathon = () => {
   return (
      <div className={Styles.card}>
         <div className={Styles.hack}>
            <h5 className={Styles.h5}>
               Register for the amazing sessions and the hackathon
            </h5>
            <div className={Styles.align}>
               <button
                  type="button"
                  className={`btn btn-primary btn-lg ${Styles.button}`}
               >
                  <a
                     href="https://devsoc.club/"
                     target="_blank"
                     rel="noreferrer"
                     className={Styles.anchor}
                  >
                     Register Now
                  </a>
               </button>
            </div>
         </div>
         <div className={Styles.image_container}>
            <img src={hackathon} className={Styles.image} alt="Hackathon" />
         </div>
      </div>
   );
};

export default Hackathon;
