import React from 'react';
import PropTypes from 'prop-types';
import Styles from './LinksWithHeader.module.scss';

class LinksWithHeader extends React.Component {
   static propTypes = {
      header: PropTypes.string,
      links: PropTypes.arrayOf({
         text: PropTypes.string,
         url: PropTypes.string,
      }),
   };
   render() {
      const links = this.props.links.map((link, index) => {
         return (
            <a href={link.url} key={index} className={Styles.link}>
               {link.text}
            </a>
         );
      });
      return (
         <div className={Styles.container}>
            <span className={Styles.heading}>{this.props.header}</span>
            {links}
         </div>
      );
   }
}

export default LinksWithHeader;
