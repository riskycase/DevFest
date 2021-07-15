import React from 'react';
import PropTypes from 'prop-types';
import './personCard.scss';

class PersonCard extends React.Component {
   static propTypes = {
      name: PropTypes.string,
      photo: PropTypes.string,
      designation: PropTypes.string,
      about: PropTypes.string,
   };
   render() {
      return (
         <div className="person-card">
            <div className="person-name">{this.props.name}</div>
            <img className="person-photo" src={this.props.photo} />
            <div className="person-info-container">
               <div className="person-about">{this.props.about}</div>
            </div>
         </div>
      );
   }
}

export default PersonCard;
