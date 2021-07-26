import React from 'react';
import DevsocStyle from '../devsoc/devsoc.module.scss';
/*import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';*/
/*import { faGooglePlay } from '@fortawesome/free-brands-svg-icons';*/

function Devsoc() {
   const stats = [
      // App Dev stats
      [
         {
            number: 15,
            stat: 'Apps on Play Store',
            description:
               'We have 15+ apps on Google Play Store that have received positive feedbacks.',
         },
         {
            number: 4000,
            stat: 'App Downloads so far',
            description: 'Our apps have been downloaded 4000+ times.',
         },
      ],
      // Web Dev stats
      [
         {
            number: 20,
            stat: 'Websites built',
            description: 'Our apps have been downloaded 4000+ times.',
         },
         {
            number: 4000,
            stat: 'App Downloads so far',
            description: 'Our apps have been downloaded 4000+ times.',
         },
      ],
      // Game Dev stats
      [
         {
            number: 10,
            stat: 'Games built and released',
            description: 'Our apps have been downloaded 4000+ times.',
         },
         {
            number: 1500,
            stat: 'Downloads of our games',
            description: 'Our apps have been downloaded 4000+ times.',
         },
      ],
   ].map((vertical, index) => (
      <div key={index} className={DevsocStyle.vertical}>
         {vertical.map((stat, index) => (
            <div key={index} className={DevsocStyle.stat}>
               <span className={DevsocStyle.statNumber}>{stat.number}+</span>
               <span className={DevsocStyle.statName}>{stat.stat}</span>
               <p className={DevsocStyle.statDescription}>{stat.description}</p>
            </div>
         ))}
      </div>
   ));
   return (
      <div className={`container ${DevsocStyle.container}`}>
         <h1>DevSoc;</h1>
         <h1>BITS Goa</h1>
         <h4>
            Developers&apos; Society of BITS Goa has been primarily responsible
            for providing innovative technical solutions to most of the issues
            in BITS Goa.
         </h4>
         <div className={DevsocStyle.statsContainer}>{stats}</div>
         <button
            type="button"
            className={`btn btn-primary btn-lg ${DevsocStyle.button}`}
         >
            <a
               href="https://devsoc.club/"
               target="_blank"
               rel="noreferrer"
               className={DevsocStyle.anchor}
            >
               Visit our Website
            </a>
         </button>
      </div>
   );
}
export default Devsoc;
