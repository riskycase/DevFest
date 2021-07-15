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
               <TextWithIcon icon={faEnvelope} text="hello@xyz.co" />
               <TextWithIcon icon={faMobileAlt} text="+91 82929 00001" />
               <TextWithIcon
                  icon={faMapMarkerAlt}
                  text="BITS Pilani K K Birla Goa Campus"
               />
               <span className={Styles.socialIconsContainer}>
                  <SocialIcon icon={faFacebookF} link="#" />
                  <SocialIcon icon={faLinkedinIn} link="#" />
                  <SocialIcon icon={faInstagram} link="#" />
                  <SocialIcon icon={faYoutube} link="#" />
                  <SocialIcon icon={faGithub} link="#" />
               </span>
            </div>
         </div>
      );
   }
}

export default Footer;
