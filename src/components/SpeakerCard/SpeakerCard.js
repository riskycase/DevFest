import React from 'react';
import PropTypes from 'prop-types';
import Styles from './SpeakerCard.module.scss';

class PersonCard extends React.Component {
   static propTypes = {
      nameAndDesignation: PropTypes.string,
      photo: PropTypes.string,
      about: PropTypes.string,
   };
   render() {
      return (
         <div className={Styles.personCard}>
            <div className={Styles.photoAndName}>
               <img className={Styles.photo} src={this.props.photo} />
               <div className={Styles.nameAndDesignation}>
                  {this.props.nameAndDesignation}
               </div>
            </div>
            <div className={Styles.personInfoContainer}>{this.props.about}</div>
         </div>
      );
   }
}

export default PersonCard;
