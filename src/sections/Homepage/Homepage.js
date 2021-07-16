import React from 'react';
import Styles from './Homepage.module.scss';

const Homepage = () => {
   return (
      <div>
         <div className={Styles.Homepage}>
            <section>DevFest 2.0</section>
            <main>
               Most calendars are designed for teams. Slate is designed for
               freelancers who want a simple way to plan their schedule
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
         <div className={Styles.background}></div>
      </div>
   );
};

export default Homepage;
