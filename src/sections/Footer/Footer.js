import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/img/logo.png';
import Styles from './Footer.module.scss';
import TextWithIcon from '../../components/TextWithIcon/TextWithIcon';
import SocialIcon from '../../components/SocialIcon/SocialIcon';

class Footer extends React.Component {
   static propTypes = {
      textsWithIcon: PropTypes.arrayOf({
         icon: PropTypes.string,
         text: PropTypes.string,
      }),
      socialIcons: PropTypes.arrayOf({
         icon: PropTypes.string,
         link: PropTypes.string,
      }),
   };
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
               <span className={Styles.codeOfConduct}>Code Of Conduct</span>
               <span className={Styles.websiteCredits}>
                  Website credits - ETHIndia and Devfolio
               </span>
               <span className={Styles.websiteEditor}>Edited by DevSoc</span>
            </div>
            <div className={Styles.rightPart}>
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
