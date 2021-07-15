import React from 'react';
import PropTypes from 'prop-types';
import PersonCard from '../../components/personCard/personCard';
import './speakers.scss';

class Speakers extends React.Component {
   static propTypes = {
      people: PropTypes.array,
   };
   render() {
      const people = this.props.people.map((person, index) => {
         return (
            <div key={index} className="speaker-card">
               <PersonCard
                  name={person.name}
                  photo={person.photo}
                  about={person.about}
               />
            </div>
         );
      });
      return <div className="speakers-container">{people}</div>;
   }
}

export default Speakers;
