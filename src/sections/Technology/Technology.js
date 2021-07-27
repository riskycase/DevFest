import React, { useState } from 'react';
import TechCard from '../../components/techcard/TechCard';
import useWindowDimensions from './useWindowDimension';
import TechnologyList from './Tech.json';
import Styles from './Technology.module.scss';

const Technology = () => {
   const { width } = useWindowDimensions();
   const defaultItemsToShow = width >= 670 ? TechnologyList.length : 2;
   const [itemsToShow, setItemsToShow] = useState(defaultItemsToShow);
   const [buttonValue, setButtonValue] = useState('Show more');

   const Button = () => {
      if (itemsToShow != 2) {
         return (
            <a
               className={Styles.button}
               href="#technology"
               onClick={() => buttonClicked()}
            >
               {buttonValue}
            </a>
         );
      } else {
         return (
            <button className={Styles.button} onClick={() => buttonClicked()}>
               {buttonValue}
            </button>
         );
      }
   };

   const buttonClicked = () => {
      if (itemsToShow == 2) {
         setItemsToShow(TechnologyList.length);
         setButtonValue('Show less');
      } else {
         setItemsToShow(2);
         setButtonValue('Show more');
      }
   };

   return (
      <div className={`${Styles.section} container`} id="technology">
         <h2 className={Styles.heading}>Technologies in Focus</h2>
         <h4 className={Styles.sub_heading}>
            DevFest features talks and workshops in a variety of fields. Our
            hackathon allows participants the freedom to choose their own way of
            building something amazing. There are no restrictions of what domain
            your hack is built for. We also feature a variety of problem
            statements from different domains!
         </h4>
         <div className={Styles.container}>
            {TechnologyList.slice(0, itemsToShow).map(tech => (
               <TechCard
                  key={tech.title}
                  title={tech.title}
                  img_url={tech.img_url}
               />
            ))}
         </div>
         {width <= 670 && <Button />}
      </div>
   );
};

export default Technology;
