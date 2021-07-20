import React from 'react';
import '../devsoc/devsoc.scss';

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

                  <h4 className="box-heading">15+ Apps on Playstore</h4>
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
