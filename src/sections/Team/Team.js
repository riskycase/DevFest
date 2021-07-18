import React from 'react';
import PersonCard from '../../components/PersonCard/PersonCard';
import Styles from './Team.module.scss';

class Team extends React.Component {
   render() {
      const team = [
         {
            name: 'Kanishq Khandelwal',
            photo: '',
            designation: 'Chief Coordinator',
         },
         {
            name: 'Adithya',
            photo: '',
            designation: 'Sub-Coordinator',
         },
         {
            name: 'Himanshu Jain',
            photo: '',
            designation: 'UI/UX Head',
         },
         {
            name: 'Mayank Mathur',
            photo: '',
            designation: 'Web Dev Vertical Head',
         },
         {
            name: 'Ritvij Kumar',
            photo: '',
            designation: 'Mobile Dev Vertical Head',
         },
         {
            name: 'Yash Bhartia',
            photo: '',
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
