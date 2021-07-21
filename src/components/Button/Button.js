import React from 'react';
import PropTypes from 'prop-types';
import Styles from './Button.module.scss';

class Button extends React.Component {
   constructor(props) {
      super(props);
   }
   render() {
      return (
         <div className={Styles.btn}>
            <div
               className={
                  this.props.color === 'primary'
                     ? Styles.primary
                     : Styles.secondary
               }
            >
               {this.props.text}
            </div>
         </div>
      );
   }
}

Button.propTypes = {
   color: PropTypes.string,
   text: PropTypes.string,
};

export default Button;
