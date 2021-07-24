import React from 'react';
import Styles from './Homepage.module.scss';
import background from '../../assets/img/background.png';
import Navbar from '../../components/Navbar/Navbar';

const Homepage = () => {
   return (
      <>
         <Navbar />
         <div className={Styles.mobile}>
            <div
               className={`container-md w-auto text-white text-align-center ${Styles.height}`}
               style={{
                  marginTop: '10%',
                  fontFamily: 'Roboto, sans-serif',
               }}
            >
               <h1 style={{ textAlign: 'center' }}>DevFest 2.0</h1>
               <main
                  className="mt-md-1 mt-5"
                  style={{
                     textAlign: 'center',
                     fontWeight: '400',
                  }}
               >
                  DevSoc’s DevFest is a week-long event full of talks by eminent
                  people, workshops, hackathon & productathon.
               </main>
            </div>
            <div className={Styles.Register}>
               <div className={Styles.buttons}>
                  <button className={Styles.dashboard}>Go to Dashboard</button>
                  <button className={Styles.register}>
                     Register for Talks/Workshops
                  </button>
               </div>
            </div>
            <br />
            <img
               src={background}
               className={Styles.background}
               alt="background"
            />
         </div>
      </>
   );
};

export default Homepage;
