//import React, { useState } from 'react';
import React from 'react';
import TechCard from '../../components/TechCard/TechCard';
import TechnologyList from './Tech.json';
import Styles from './Technology.module.scss';

const Technology = () => {
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
      <div className={`${Styles.section} container`} id="technology">
         <h2 className={Styles.heading}>Technologies in Focus</h2>
         <h4>
            DevFest features talks and workshops in a variety of fields. Our
            hackathon allows participants the freedom to choose their own way of
            building something amazing. There are no restrictions of what domain
            your hack is built for. We also feature a variety of problem
            statements from different domains!
         </h4>
         <div className={Styles.container}>
            {/* {TechnologyList.slice(0, itemsToShow).map(tech => ( */}
            {TechnologyList.map(tech => (
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

export default Technology;
