import React from 'react';
import PropTypes from 'prop-types';
import Styles from './SocialIcon.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class SocialIcon extends React.Component {
   static propTypes = {
      icon: PropTypes.string,
      link: PropTypes.string,
   };
   render() {
      return (
         <a className={Styles.container} href={this.props.link}>
            <FontAwesomeIcon icon={this.props.icon} className={Styles.icon} />
         </a>
      );
   }
}

export default SocialIcon;
