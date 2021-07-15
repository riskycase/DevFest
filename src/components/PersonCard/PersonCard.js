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
            <div className={Styles.personName}>{this.props.name}</div>
            <img className={Styles.personPhoto} src={this.props.photo} />
            <div className={Styles.personInfoContainer}>
               <div>{this.props.about}</div>
            </div>
         </div>
      );
   }
}

export default PersonCard;
