import React from 'react';
import TechCard from '../../components/techcard/TechCard';
import TechnologyList from './Tech.json';
import Styles from './Technology.module.scss';

const technology = () => {
   return (
      <div>
         <h2 className={Styles.heading}>Technologies in focus</h2>
         <div className={Styles.container}>
            {TechnologyList.map(tech => (
               <TechCard
                  key={tech.title}
                  title={tech.title}
                  img_url={tech.img_url}
               />
            ))}
         </div>
      </div>
   );
};

export default technology;
