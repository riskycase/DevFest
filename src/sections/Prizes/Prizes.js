import React from 'react';
import Styles from './Prizes.module.scss';

class Prizes extends React.Component {
   render() {
      const prizes = [
         {
            recipient: 'Winner',
            items: [
               'Cash prize of Rs 20k.',
               'Internship Opportunity at Zeta Suite(Unicorn) for every team member *',
               '.XYZ Domains for all team members.',
               'Certificate of Excellence',
               'Premium swag kits',
               'Digital Ocean credits worth $250',
               'Voiceflow professional license for 1 month.',
               'Coding Ninjas course discount of 25%',
               '90 day extended trial of Balsamiq',
               'Free course access at Interview cake.',
               'Autonoise free intern program.',
            ],
         },
         {
            recipient: 'First Runner Up',
            items: [
               'Cash prize of Rs 10k',
               'Internship Opportunity at Zeta Suite(Unicorn) for every team member *',
               '.XYZ Domains for all team members.',
               'Certificate of Excellence',
               'Premium swag kits',
               'Digital Ocean credits worth $250',
               'Voiceflow professional license for 1 month.',
               'Coding Ninjas course discount of 25%',
               '90 day extended trial of Balsamiq',
               'Free course access at Interview cake.',
            ],
         },
         {
            recipient: 'Second Runner Up',
            items: [
               'Cash prize of Rs 5k',
               'Internship Opportunity at Zeta Suite(Unicorn) for every team member *',
               '.XYZ Domains for all team members.',
               'Certificate of Excellence',
               'Premium swag kits',
               'Digital Ocean credits worth $250',
               'Voiceflow professional license for 1 month.',
               'Coding Ninjas course discount of 25%',
               '90 day extended trial of Balsamiq',
               'Free course access at Interview cake.',
            ],
         },
         {
            recipient: 'Top 25 Teams',
            items: [
               '.XYZ Domains per team',
               'Certificate of Appreciation',
               'Special swag kits',
               'Digital Ocean credits worth $100',
               'Voiceflow professional license for 1 month.',
               'Coding Ninjas course discount of 25%',
               '90 day extended trial of Balsamiq',
               'Free course access at Interview cake.',
            ],
         },
         {
            recipient: 'All Participants',
            items: [
               'Certificate of Participation',
               'Digital Ocean credits worth $100',
               'Voiceflow professional license for 1 month.',
               'Coding Ninjas course discount of 25%',
               '90 day extended trial of Balsamiq',
               'Free course access at Interview cake.',
            ],
         },
      ].map((prize, index) => (
         <div key={index} className={Styles.prizeCard}>
            <span className={Styles.recipient}>{prize.recipient}</span>
            <ul className={Styles.list}>
               {prize.items.map((item, index) => (
                  <li key={index} className={Styles.listItem}>
                     {item}
                  </li>
               ))}
            </ul>
         </div>
      ));
      const specialPrizes = [
         {
            category: 'Sawo Labs',
            prize: (
               <span>
                  Top 15 teams to use Sawo labs API will get special swag kits
               </span>
            ),
         },
         {
            category: 'Qoohoo Prize',
            prize: (
               <span>
                  During the hackathon upload a selfie while coding on Instagram
                  and get a chance to win amazon vouchers worth Rs. 10k.
                  <br />
                  Do not forget to tag @qoohooapp and @devsocbitsgoa
               </span>
            ),
         },
         {
            category: 'Blockchain Prize',
            prize: (
               <span>
                  Best app made in blockchain will get cash prize of Rs 15k
               </span>
            ),
         },
      ].map((prize, index) => (
         <div key={index} className={Styles.prizeCard}>
            <span className={Styles.recipient}>{prize.category}</span>
            <span className={Styles.prize}>{prize.prize}</span>
         </div>
      ));
      return (
         <div className={`${Styles.prizesContainer} container`}>
            <h2>Prizes</h2>
            <div className={Styles.prizeCardsContainer}>{prizes}</div>
            <span className={Styles.internshipDisclaimer}>
               * Only for teams who attempt the FinTech problem statement
               provided by Zeta Suite
            </span>
            <h4 className={Styles.subHeading}>Special Prizes</h4>
            <div className={Styles.prizeCardsContainer}>{specialPrizes}</div>
         </div>
      );
   }
}

export default Prizes;
