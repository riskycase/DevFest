import React from 'react';
import logo from '../../assets/img/logo.png';
import Styles from './Footer.module.scss';
import TextWithIcon from '../../components/TextWithIcon/TextWithIcon';
import SocialIcon from '../../components/SocialIcon/SocialIcon';
import {
   faMapMarkerAlt,
   faMobileAlt,
   faEnvelope,
} from '@fortawesome/free-solid-svg-icons';
import {
   faFacebookF,
   faGithub,
   faInstagram,
   faLinkedinIn,
   faYoutube,
} from '@fortawesome/free-brands-svg-icons';

class Footer extends React.Component {
   render() {
      const textsWithIcon = this.props.textsWithIcon.map(
         (textWithIcon, index) => (
            <TextWithIcon
               icon={textWithIcon.icon}
               text={textWithIcon.text}
               key={index}
            />
         ),
      );
      const socialIcons = this.props.socialIcons.map((socialIcon, index) => (
         <SocialIcon
            icon={socialIcon.icon}
            link={socialIcon.link}
            key={index}
         />
      ));
      return (
         <div className={Styles.container}>
            <div className={Styles.leftPart}>
               <div className={Styles.logoContainer}>
                  <img className={Styles.logo} src={logo} />
                  <span className={Styles.disclaimerText}>
                     All ideas and source code will be under the ownership of
                     DevSoc
                  </span>
               </div>
               <span className={Styles.buttonPlaceholder} />
               <span className={Styles.websiteCredits}>
                  Website credits - ETHIndia and Devfolio
               </span>
               <span className={Styles.websiteEditor}>Edited by DevSoc</span>
            </div>
            <div className={Styles.rightPart}>
               <span className={Styles.rightPartTitle}>Reach Us</span>
               {textsWithIcon}
               <span className={Styles.socialIconsContainer}>
                  {socialIcons}
               </span>
            </div>
         </div>
      );
   }
}

export default Footer;
