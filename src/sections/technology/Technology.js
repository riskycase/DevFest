import React /* , { useState } */ from 'react';
import TechCard from '../../components/techcard/TechCard';
import TechnologyList from './Tech.json';
import Styles from './Technology.module.scss';

const technology = () => {
   /* const [itemsToShow, setItemsToShow] = useState(2);
   const [buttonValue, setButtonValue] = useState('Show more');

   const buttonClicked = () => {
      if (itemsToShow == 2) {
         setItemsToShow(TechnologyList.length);
         setButtonValue('Show less');
      } else {
         setItemsToShow(2);
         setButtonValue('Show more');
      }
   }; */

   return (
      <div className={Styles.section}>
         <h2 className={Styles.heading}>Technologies in focus</h2>
         <div className={Styles.container}>
            {TechnologyList /* .slice(0, itemsToShow) */.map(tech => (
               <TechCard
                  key={tech.title}
                  title={tech.title}
                  img_url={tech.img_url}
               />
            ))}
         </div>
         {/* <button onClick={() => buttonClicked()}>{buttonValue}</button> */}
      </div>
   );
};

export default technology;
