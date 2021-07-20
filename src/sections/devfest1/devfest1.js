import React from 'react';
import '../devfest1/devfest1.scss';
import Img1 from '../../assets/img/Devfest1.0/img.png';
/*import Img2 from '../../assets/img/Devfest1.0/img2.png';*/

function Devfest() {
   return (
      <div className="container">
         <div className="row">
            <div className="col-lg-12 text-center">
               <h2 className="section-heading-1 text-center">DevFest 1.0</h2>
               <h4 className="section-subheading-1 text">
                  Devfest 1.0 was a massive success with 1000+ students and 5+
                  sessions. BITS Goa is back with yet another chaper of DEVFEST!
               </h4>
            </div>
            <div className="card">
               <div className="row no-gutters">
                  <div className="col-auto">
                     <img src={Img1} className="img-fluid" alt="" />
                  </div>
                  <div className="col">
                     <div className="card-block px-2">
                        <h4 className="card-title">10,000+ Registrations</h4>
                        <p className="card-text">
                           When you add work to your Slate calendar we
                           automatically calculate useful insights
                        </p>
                     </div>
                     <div className="card-block px-2">
                        <h4 className="card-title">500+ Colleges</h4>
                        <p className="card-text">
                           When you add work to your Slate calendar we
                           automatically calculate useful insights
                        </p>
                     </div>
                     <div className="card-block px-2">
                        <h4 className="card-title">20+ Talks and Workshops</h4>
                        <p className="card-text">
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
