import React from 'react';
import Styles from './CountUp.module.scss';
import PropTypes from 'prop-types';

class CountUp extends React.Component {
   static propTypes = {
      number: PropTypes.number,
   };
   render() {
      return <span className={Styles.statNumber}>{this.props.number}+</span>;
   }
}

export default CountUp;
