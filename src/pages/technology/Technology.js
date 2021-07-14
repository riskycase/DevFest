import React from 'react';
import TechCard from '../../components/techcard/TechCard';
import TechnologyList from './Tech.json';

const technology = () => {
   return (
      <div>
         <h2>Technologies in focus</h2>
         {TechnologyList.map(tech => (
            <TechCard
               key={tech.title}
               title={tech.title}
               img_url={tech.img_url}
            />
         ))}
      </div>
   );
};

export default technology;
