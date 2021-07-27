import React from 'react';
import Styles from './Speakers.module.scss';

class Speakers extends React.Component {
   peopleInfo = [
      {
         nameAndDesignation: 'Tim Ruscica from TechWithTim 1',
         about: 'How to find Software Development internships + Tips on Getting Started in Machine Learning',
         photo: 'https://th.bing.com/th/id/OIP.iKDi9A4ltWdsIrj6DYr8gAHaIC?pid=ImgDet&rs=1',
      },
      {
         nameAndDesignation: 'Tim Ruscica from TechWithTim 2',
         about: 'How to find Software Development internships + Tips on Getting Started in Machine Learning',
         photo: 'https://th.bing.com/th/id/OIP.iKDi9A4ltWdsIrj6DYr8gAHaIC?pid=ImgDet&rs=1',
      },
      {
         nameAndDesignation: 'Tim Ruscica from TechWithTim 3',
         about: 'How to find Software Development internships + Tips on Getting Started in Machine Learning',
         photo: 'https://th.bing.com/th/id/OIP.iKDi9A4ltWdsIrj6DYr8gAHaIC?pid=ImgDet&rs=1',
      },
      {
         nameAndDesignation: 'Tim Ruscica from TechWithTim 4',
         about: 'How to find Software Development internships + Tips on Getting Started in Machine Learning',
         photo: 'https://th.bing.com/th/id/OIP.iKDi9A4ltWdsIrj6DYr8gAHaIC?pid=ImgDet&rs=1',
      },
      {
         nameAndDesignation: 'Tim Ruscica from TechWithTim 5',
         about: 'How to find Software Development internships + Tips on Getting Started in Machine Learning',
         photo: 'https://th.bing.com/th/id/OIP.iKDi9A4ltWdsIrj6DYr8gAHaIC?pid=ImgDet&rs=1',
      },
      {
         nameAndDesignation: 'Tim Ruscica from TechWithTim 6',
         about: 'How to find Software Development internships + Tips on Getting Started in Machine Learning',
         photo: 'https://th.bing.com/th/id/OIP.iKDi9A4ltWdsIrj6DYr8gAHaIC?pid=ImgDet&rs=1',
      },
   ];
   constructor(props) {
      super(props);
      this.state = { index: 0, size: this.peopleInfo.length };
   }
   shouldComponentUpdate(_, newProp) {
      if (newProp.index === this.state.size) this.setState({ index: 0 });
      if (newProp.index === -1) this.setState({ index: this.state.size - 1 });
      return this.state.index !== newProp.index;
   }
   incrementIndex = () => {
      this.setState({ index: this.state.index + 1 });
   };
   decrementIndex = () => {
      this.setState({ index: this.state.index - 1 });
   };
   cardScroll = e => {
      let index = Math.floor(
         e.target.scrollLeft / (screen.width < 368 ? screen.width : 368),
      );
      this.setState({ index: index });
   };
   render() {
      const people = this.peopleInfo.map((person, index) => {
         return (
            // <div key={index} className={Styles.speakerCardWrapper}>
            <div key={index} className={Styles.speakerCard}>
               <img
                  className={Styles.photo}
                  src={person.photo}
                  alt={person.name}
               />
               <span className={Styles.nameAndDesignation}>
                  {person.nameAndDesignation}
               </span>
               <span className={Styles.about}>{person.about}</span>
            </div>
            // </div>
         );
      });
      /*
      const indicators = people.map((_person, index) => {
         return (
            <span
               key={index}
               className={
                  index === this.state.index ||
                  (index === 0 && this.state.index === people.length)
                     ? Styles.indicatorActive
                     : Styles.cardsIndicator
               }
            />
         );
      });
      Add first three items again to last so we can have consistent
      animation going from last item to first
      people.push(people[0]);
      people.push(people[1]);
      people.push(people[2]);
      */
      return (
         <div className={`${Styles.speakersContainer} container`}>
            <h2>Speakers</h2>
            <h4>
               We focus on ergonomics and meeting you where you work. It&apos;s
               only a keystroke away.
            </h4>
            <div className={Styles.speakerCardsContainer}>{people}</div>
            {/* <div className={Styles.speakersCarousel}>
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
                     onClick={this.decrementIndex}
                  />
                  <div className={Styles.indicatorWrapper}>{indicators}</div>
                  <FontAwesomeIcon
                     icon={faChevronCircleRight}
                     className={Styles.changeCardIcon}
                     size="2x"
                     onClick={this.incrementIndex}
                  />
               </div>
            </div> */}
         </div>
      );
   }
}

export default Speakers;
