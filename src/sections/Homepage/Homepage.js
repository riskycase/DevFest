import React, { useEffect } from 'react';
import Styles from './Homepage.module.scss';
import background from '../../assets/img/background.png';
import Navbar from '../../components/Navbar/Navbar';

const Homepage = () => {
   useEffect(() => {
      const script = document.createElement('script');
      script.src = 'https://apply.devfolio.co/v2/sdk.js';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
      return () => {
         document.body.removeChild(script);
      };
   }, []);
   return (
      <>
         <Navbar />
         <div className={Styles.mobile}>
            <div
               className={`container-md w-auto text-white text-align-center`}
               style={{
                  marginTop: '10%',
                  fontFamily: 'Roboto, sans-serif',
               }}
            >
               <h1>DevFest 2.0</h1>
               <main
                  className="mt-md-5 mt-2"
                  style={{
                     textAlign: 'justify',
                     fontWeight: '400',
                  }}
               >
                  <p>
                     DevFest is the week-long completely online technical fest
                     organized by DevSoc, Developers&apos; Society, BITS Pilani,
                     Goa campus. In this one week, we will be going on an
                     exciting adventure of technical events like talks by
                     eminent tech leaders, workshops to learn new skills and
                     hackathons where teams rack their brains to find solutions
                     to real-world problems. So what are you waiting for? Come
                     and join us to be a part of this amazing event!
                  </p>
                  <div className={`${Styles.Register} mt-md-5`}>
                     <div className={Styles.buttons}>
                        <button
                           className={`apply-button ${Styles.dashboard}`}
                           // data-hackathon-slug="DevFest 2.0"
                           // data-button-theme="light"
                           style={{
                              height: 'auto',
                           }}
                        >
                           {/* <button className={Styles.dashboard}>
                     </button> */}
                           <a href="" className="text-decoration-none">
                              Apply with Devfolio
                           </a>
                        </button>
                        <button className={Styles.register}>
                           <a href="" className="text-decoration-none">
                              Register for Talks/Workshops
                           </a>
                        </button>
                     </div>
                  </div>
                  <br />
               </main>
            </div>
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
