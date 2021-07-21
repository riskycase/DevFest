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
      const testimonial = this.props.people.map((person, index) => {
         return (
            <div key={index} className={Styles.testimonialCard}>
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
         <div className={`${Styles.testimonialContainer} container`}>
            <span className={Styles.testimonialName}>Testimonials</span>
            <div className={Styles.testimonialMembers}>{testimonial}</div>
         </div>
      );
   }
}

export default Testimonials;
