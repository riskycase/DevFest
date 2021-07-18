import React from 'react';
import PropTypes from 'prop-types';
import PersonCard from '../../components/PersonCard/PersonCard';
import Styles from './Testimonials.module.scss';

class Testimonials extends React.Component {
   static propTypes = {
      people: PropTypes.arrayOf({
         name: PropTypes.string,
         designation: PropTypes.string,
         photo: PropTypes.string,
         testimonial: PropTypes.string,
      }),
   };
   render() {
      const team = this.props.people.map((person, index) => {
         return (
            <div key={index} className={Styles.teamCard}>
               <PersonCard
                  name={person.name}
                  photo={person.photo}
                  designation={person.designation}
                  about={person.testimonial}
               />
            </div>
         );
      });
      return (
         <div className={Styles.teamContainer}>
            <span className={Styles.teamName}>Testimonials</span>
            <div className={Styles.teamMembers}>{team}</div>
         </div>
      );
   }
}

export default Testimonials;
