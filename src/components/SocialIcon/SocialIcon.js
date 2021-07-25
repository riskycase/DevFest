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
         <a
            className={Styles.container}
            href={this.props.link}
            target="_blank"
            rel="noreferrer"
         >
            <FontAwesomeIcon
               icon={this.props.icon}
               className={Styles.icon}
               size="2x"
            />
         </a>
      );
   }
}

export default SocialIcon;
