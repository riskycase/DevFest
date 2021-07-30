import React from 'react';
import Styles from './Team.module.scss';
import Kanishq from '../../assets/img/team/Kanishq.jpeg';
import Mayank from '../../assets/img/team/Mayank.jpeg';
import Himanshu from '../../assets/img/team/Himanshu.jpeg';
import Adithya from '../../assets/img/team/Adithya.jpeg';
import Yash from '../../assets/img/team/Yash_edited.jpeg';
import Ritvij from '../../assets/img/team/Ritvij.png';
import LinkedInIcon from './../../assets/img/linkedin.svg';

class Team extends React.Component {
   render() {
      const team = [
         {
            name: 'Kanishq Khandelwal',
            photo: Kanishq,
            designation: 'Chief Coordinator',
            linkedIn: 'https://www.linkedin.com/in/kanishqkhandelwal/',
         },
         {
            name: 'Adithya M',
            photo: Adithya,
            designation: 'Sub-Coordinator',
            linkedIn:
               'https://www.linkedin.com/in/adithya-manickavasakam-5018b4193/',
         },
         {
            name: 'Himanshu Jain',
            photo: Himanshu,
            designation: 'Product Design Head',
            linkedIn: 'https://www.linkedin.com/in/himanshu-jain-18a85a1b1/',
         },
         {
            name: 'Mayank Mathur',
            photo: Mayank,
            designation: 'Web Dev Vertical Head',
            linkedIn: 'https://www.linkedin.com/in/mayank-mathur-205767197/',
         },
         {
            name: 'Ritvij Kumar',
            photo: Ritvij,
            designation: 'Mobile Dev Vertical Head',
            linkedIn: 'https://www.linkedin.com/in/rks-1410',
         },
         {
            name: 'Yash Bhartia',
            photo: Yash,
            designation: 'Game Dev Vertical Head',
            linkedIn: 'https://www.linkedin.com/in/yashbhartia00',
         },
      ].map((person, index) => {
         return (
            <div key={index} className={Styles.teamCard}>
               <img
                  className={Styles.photo}
                  src={person.photo}
                  alt={person.name}
               />
               <span className={Styles.name}>{person.name}</span>
               <span className={Styles.designation}>{person.designation}</span>
               <span className={Styles.designation}>
                  <a href={person.linkedIn}>
                     <img src={LinkedInIcon} />
                  </a>
               </span>
            </div>
         );
      });
      return (
         <div className={`${Styles.teamContainer} container`} id="team">
            <h2>Meet the Team</h2>
            <div className={Styles.teamMembers}>{team}</div>
         </div>
      );
   }
}

export default Team;
