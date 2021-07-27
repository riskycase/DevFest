import React from 'react';
import DevfestStyle from './devfest1.module.scss';
('../devfest1/devfest1.module.scss');
import Img1 from '../../assets/img/Devfest1.0/Devfest1.png';

function Devfest() {
   const texts = [
      ['2000+', 'Participants'],
      ['Workshops by', 'Tech With Tim,', 'GeeksForGeeks,', '& Interviewbit'],
      ['Credits worth', 'Rs. 10 Lakhs', 'and cash prizes', 'worth Rs 45,000'],
   ].map((text, index) => (
      <div className={DevfestStyle.textRight} key={index}>
         {text.map((line, index) => (
            <div key={index}>{line}</div>
         ))}
      </div>
   ));
   return (
      <div className="container" id="devfest">
         <div className="row">
            <div className="col-lg-12 text-center">
               <h2 className={`text-center ${DevfestStyle.sectionheading}`}>
                  DevFest 1.0
               </h2>
               <h4 className={`text ${DevfestStyle.sectionsubheading}`}>
                  Devfest 1.0 was a massive success with people joining in!
               </h4>
            </div>

            <div className={`card ${DevfestStyle.card}`}>
               <img src={Img1} className={DevfestStyle.image} alt="" />
               <div className={DevfestStyle.col1}>{texts}</div>
            </div>
         </div>
      </div>
   );
}

export default Devfest;
