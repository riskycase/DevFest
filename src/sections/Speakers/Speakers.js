import React from 'react';
import PropTypes from 'prop-types';
import PersonCard from '../../components/PersonCard/PersonCard';
import Styles from './Speakers.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faChevronCircleLeft,
   faChevronCircleRight,
} from '@fortawesome/free-solid-svg-icons';

class Speakers extends React.Component {
   static propTypes = {
      people: PropTypes.arrayOf({
         name: PropTypes.string,
         designation: PropTypes.string,
         photo: PropTypes.string,
         about: PropTypes.string,
         backdrop: PropTypes.string,
      }),
   };
   cardScroll = e => {
      let index = Math.floor(
         e.target.scrollLeft / (screen.width < 400 ? screen.width : 400),
      );
      console.log(index);
   };
   render() {
      const people = this.props.people.map((person, index) => {
         return (
            <div key={index} className={Styles.speakerCardWrapper}>
               <div className={Styles.speakerCard}>
                  <div className={Styles.backdropWrapper}>
                     <img src={person.backdrop} className={Styles.backdrop} />
                  </div>
                  <div className={Styles.infoCard}>
                     <PersonCard
                        name={person.name}
                        designation={person.designation}
                        photo={person.photo}
                        about={person.about}
                     />
                  </div>
               </div>
            </div>
         );
      });
      const indicators = this.props.people.map((_person, index) => {
         return <span key={index} className={Styles.cardsIndicator} />;
      });
      // Add first three items again to last so we can have consistent
      // animation going from last item to first
      people.push(people[0]);
      people.push(people[1]);
      people.push(people[2]);
      return (
         <div className={`${Styles.speakersContainer} container`}>
            <h2>Speakers</h2>
            <h4>
               We focus on ergonomics and meeting you where you work. It&apos;s
               only a keystroke away.
            </h4>
            <div className={Styles.speakersCarousel}>
               <div
                  className={Styles.cardsContainer}
                  onScroll={this.cardScroll}
               >
                  {people}
               </div>
               <div className={Styles.cardsPagination}>
                  <FontAwesomeIcon
                     icon={faChevronCircleLeft}
                     className={Styles.changeCardIcon}
                     size="2x"
                  />
                  <div className={Styles.indicatorWrapper}>{indicators}</div>
                  <FontAwesomeIcon
                     icon={faChevronCircleRight}
                     className={Styles.changeCardIcon}
                     size="2x"
                  />
               </div>
            </div>
         </div>
      );
   }
}

export default Speakers;
