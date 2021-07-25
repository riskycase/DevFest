import React from 'react';
import DevfestStyle from './devfest1.module.scss';
('../devfest1/devfest1.module.scss');
import Img1 from '../../assets/img/Devfest1.0/Devfest1.png';

function Devfest() {
   return (
      <div className="container" id="devfest">
         <div className="row">
            <div className="col-lg-12 text-center">
               <h2 className={`text-center ${DevfestStyle.sectionheading1}`}>
                  DevFest 1.0
               </h2>
               <h4 className={`text ${DevfestStyle.sectionsubheading1}`}>
                  <span className={DevfestStyle.sectionsubheadingdiff}>
                     Devfest 1.0
                  </span>{' '}
                  was a massive success with people joining in!
               </h4>
               <h4 className={`text ${DevfestStyle.sectionsubheading2}`}>
                  BITS Pilani, Goa is back with yet another chaper of DevFest!
               </h4>
            </div>

            <div className={`card ${DevfestStyle.card1}`}>
               <div className="row no-gutters">
                  <div className={`col-auto ${DevfestStyle.col2}`}>
                     <img src={Img1} className="img-fluid" alt="" />
                  </div>
                  <div className={`col ${DevfestStyle.col1}`}>
                     <div
                        className={`card-block px-2 ${DevfestStyle.cardblock}`}
                     >
                        <h4 className={`card-title ${DevfestStyle.cardtitle}`}>
                           10,000+ Registrations
                        </h4>
                        <p className={`card-text ${DevfestStyle.cardtext}`}>
                           When you add work to your Slate calendar we
                           automatically calculate useful insights
                        </p>
                     </div>
                     <div
                        className={`card-block px-2 ${DevfestStyle.cardblock}`}
                     >
                        <h4 className={`card-title ${DevfestStyle.cardtitle}`}>
                           500+ Colleges
                        </h4>
                        <p className={`card-text ${DevfestStyle.cardtext}`}>
                           When you add work to your Slate calendar we
                           automatically calculate useful insights
                        </p>
                     </div>
                     <div
                        className={`card-block px-2 ${DevfestStyle.cardblock}`}
                     >
                        <h4 className={`card-title ${DevfestStyle.cardtitle}`}>
                           20+ Talks and Workshops
                        </h4>
                        <p className={`card-text ${DevfestStyle.cardtext}`}>
                           When you add work to your Slate calendar we
                           automatically calculate useful insights
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Devfest;
