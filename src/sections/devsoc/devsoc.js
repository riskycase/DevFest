import React from 'react';
import '../devsoc/devsoc.scss';
/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';*/
/*import { faGooglePlay } from '@fortawesome/free-brands-svg-icons';*/

function Devsoc() {
   return (
      <section className="page-section" id="boxs">
         <hr />
         <div className="container">
            <div className="row">
               <div className="col-lg-12 text-center">
                  <h2 className="section-heading text-center">DevSoc;</h2>
                  <h2 className="section-heading text-center">BITS Goa</h2>
                  <h4 className="section-subheading text">
                     Developers Society of BITS Goa has been primarily
                     responsible for providing innovative technical solutions to
                     most of the issues in BITS Goa.
                  </h4>
               </div>
            </div>
            <div className="row text-center">
               <div className="col-md-6">
                  <span className="fa-stack fa-4x"></span>

                  <h4 className="box-heading">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30"
                        height="30"
                        fill="currentColor"
                        className="bi bi-play-fill"
                        viewBox="0 0 16 16"
                     >
                        <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                     </svg>
                     15+ Apps on Playstore
                  </h4>
                  <p className="box-text">
                     We have 15+ apps on Google Play Store that have received
                     positive feedbacks.
                  </p>
               </div>
               <div className="col-md-6">
                  <span className="fa-stack fa-4x"></span>
                  <h4 className="box-heading">4000+ App Downloads so far</h4>
                  <p className="box-text">
                     Our apps have been downloaded 4000+ times.
                  </p>
               </div>
            </div>
            <div className="row text-center">
               <div className="col-md-6">
                  <span className="fa-stack fa-4x"></span>
                  <h4 className="box-heading">4000+ App Downloads so far</h4>
                  <p className="box-text">
                     Our apps have been downloaded 4000+ times.
                  </p>
               </div>
               <div className="col-md-6">
                  <span className="fa-stack fa-4x"></span>
                  <h4 className="box-heading">Avg Rating of 4.7</h4>
                  <p className="box-text">
                     Our apps have an average app rating of 4.7 out of 5 on
                     google play-store
                  </p>
               </div>
            </div>
         </div>
         <div className="col-md-12 text-center">
            <button type="button" className="btn btn-primary btn-lg">
               Visit our Website
            </button>
         </div>

         <hr />
      </section>
   );
}
export default Devsoc;
