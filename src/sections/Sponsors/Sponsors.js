import React from 'react';
import Styles from './Sponsors.module.scss';
// import ibm from '../../assets/img/sponsors/IBM.png';
// import bnb from '../../assets/img/sponsors/airbnb.png';
// import android from '../../assets/img/sponsors/android.png';
// import apiary from '../../assets/img/sponsors/apiary.png';
// import apple from '../../assets/img/sponsors/apple-app.png';
import Logos from '../../components/Logos/Logos';

function Sponsors() {
   return (
      <div className={Styles.brands}>
         <h1>Sponsors</h1>
         <h5>Meet our amazing Sponsors</h5>
         <div className={Styles.sponsors}>
            {/* <img src={ibm} alt="Wow" />
            <img src={bnb} alt="Wow" />
            <img src={android} alt="Wow" />
            <img src={apiary} alt="Wow" />
            <img src={apple} alt="Wow" />
            <img src={ibm} alt="Wow" /> */}
            <Logos
               array={[
                  {
                     path: '/img/sponsors/IBM.png',
                     alt: 'IBM',
                  },
                  {
                     path: '/img/sponsors/airbnb.png',
                     alt: 'Airbnb',
                  },
                  {
                     path: 'jwekbfjkwe',
                     alt: 'afbjkekjf',
                  },
               ]}
            />
         </div>
         <button>All Partners</button>
      </div>
   );
}

export default Sponsors;
