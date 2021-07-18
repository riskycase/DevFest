import React from 'react';
import PropTypes from 'prop-types';
import Styles from './PersonCard.module.scss';

class PersonCard extends React.Component {
   static propTypes = {
      name: PropTypes.string,
      photo: PropTypes.string,
      designation: PropTypes.string,
      about: PropTypes.string,
   };
   render() {
      return (
         <div className={Styles.personCard}>
            <div className={Styles.photoAndName}>
               <img className={Styles.photo} src={this.props.photo} />
               <div className={Styles.nameAndDesignation}>
                  <span className={Styles.name}>{this.props.name}</span>
                  <span className={Styles.designation}>
                     {this.props.designation}
                  </span>
               </div>
            </div>
            <div className={Styles.personInfoContainer}>{this.props.about}</div>
         </div>
      );
   }
}

export default PersonCard;
