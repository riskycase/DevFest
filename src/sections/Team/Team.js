import React from 'react';
import PersonCard from '../../components/PersonCard/PersonCard';
import Styles from './Team.module.scss';
import Kanishq from '../../assets/img/team/Kanishq.jpeg';
import Mayank from '../../assets/img/team/Mayank.jpeg';
import Himanshu from '../../assets/img/team/Himanshu.jpeg';
import Adithya from '../../assets/img/team/Adithya.jpeg';
import Yash from '../../assets/img/team/Yash.jpeg';
import Ritvij from '../../assets/img/team/Ritvij.png';

class Team extends React.Component {
   render() {
      const team = [
         {
            name: 'Kanishq Khandelwal',
            photo: Kanishq,
            designation: 'Chief Coordinator',
         },
         {
            name: 'Adithya',
            photo: Adithya,
            designation: 'Sub-Coordinator',
         },
         {
            name: 'Himanshu Jain',
            photo: Himanshu,
            designation: 'UI/UX Head',
         },
         {
            name: 'Mayank Mathur',
            photo: Mayank,
            designation: 'Web Dev Vertical Head',
         },
         {
            name: 'Ritvij Kumar',
            photo: Ritvij,
            designation: 'Mobile Dev Vertical Head',
         },
         {
            name: 'Yash Bhartia',
            photo: Yash,
            designation: 'Game Dev Vertical Head',
         },
      ].map((person, index) => {
         return (
            <div key={index} className={Styles.teamCard}>
               <PersonCard
                  name={person.name}
                  photo={person.photo}
                  designation={person.designation}
               />
            </div>
         );
      });
      return (
         <div className={Styles.teamContainer}>
            <span className={Styles.teamName}>The DevSoc Team</span>
            <div className={Styles.teamMembers}>{team}</div>
         </div>
      );
   }
}

export default Team;
