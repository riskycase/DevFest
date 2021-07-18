import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Footer.module.scss';
import TextWithIcon from '../../components/TextWithIcon/TextWithIcon';
import SocialIcon from '../../components/SocialIcon/SocialIcon';
import LinksWithHeader from '../../components/LinksWithHeader/LinksWithHeader';

class Footer extends React.Component {
   static propTypes = {
      linkColumns: PropTypes.arrayOf({
         header: PropTypes.string,
         link: PropTypes.arrayOf({
            text: PropTypes.string,
            url: PropTypes.string,
         }),
      }),
      textsWithIcon: PropTypes.arrayOf({
         text: PropTypes.string,
         icon: PropTypes.string,
      }),
      socialIcons: PropTypes.arrayOf({
         link: PropTypes.string,
         icon: PropTypes.string,
      }),
   };
   render() {
      const linkColumns = this.props.linkColumns.map((link, index) => (
         <LinksWithHeader header={link.header} links={link.link} key={index} />
      ));
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
            <div className={Styles.links}>{linkColumns}</div>
            <div className={Styles.contactUs}>
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
