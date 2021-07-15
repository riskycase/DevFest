import React from 'react';
import PropTypes from 'prop-types';
import PersonCard from '../../components/personCard/personCard';
import Styles from './team.module.scss';

class Team extends React.Component {
   static propTypes = {
      people: PropTypes.array,
   };
   render() {
      const people = this.props.people.map((person, index) => {
         return (
            <div key={index} className={Styles.teamCard}>
               <PersonCard
                  name={person.name}
                  photo={person.photo}
                  about={person.about}
               />
            </div>
         );
      });
      return <div className={Styles.teamContainer}>{people}</div>;
   }
}

export default Team;
