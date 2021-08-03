import React from 'react';
import './Timeline.scss';
export const Timeline = () => {
   return (
      <div className="container-timeline">
         <h2 className="heading">Timeline</h2>
         <div className="timeline">
            <div className="timeline-container danger">
               <div className="timeline-icon">
                  <i className="far fa-grin-hearts"></i>
               </div>
               <div className="timeline-body">
                  <h4 className="timeline-title">
                     <span className="badge">Events and Workshops 🚀</span>
                  </h4>
                  <p>
                     For the first 5 days we will have dignified personalities
                     in the tech world give talks and workshops from various
                     tech companies, which will help all participants in getting
                     to know about new skills and also hear from the people
                     about their stories and how they gained success with their
                     brands. These talks and workshops will be an amazing
                     experience for everyone!
                  </p>
                  <p className="timeline-subtitle">9th August - 13th August</p>
               </div>
            </div>
            <div className="timeline-container info">
               <div className="timeline-icon">
                  <i className="far fa-grin"></i>
               </div>
               <div className="timeline-body">
                  <h4 className="timeline-title">
                     <span className="badge">Hackathon 🔥</span>
                  </h4>
                  <p>
                     A 2 day fun-filled and challenging hackathon with problem
                     statements on various domains and many prizes! You will
                     have 40 hours to build your hack, starting at 8.00 AM on
                     14th August till the midnight of 15th August.
                  </p>
                  <p className="timeline-subtitle">14th August - 15th August</p>
               </div>
            </div>
         </div>
      </div>
   );
};
