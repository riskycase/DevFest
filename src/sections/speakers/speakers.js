import React from 'react';
import PropTypes from 'prop-types';
import PersonCard from '../../components/personCard/personCard';
import Styles from './speakers.module.scss';

class Speakers extends React.Component {
   static propTypes = {
      people: PropTypes.array,
   };
   render() {
      const people = this.props.people.map((person, index) => {
         return (
            <div key={index} className={Styles.speakerCard}>
               <PersonCard
                  name={person.name}
                  photo={person.photo}
                  about={person.about}
               />
            </div>
         );
      });
      return <div className={Styles.speakersContainer}>{people}</div>;
   }
}

export default Speakers;
