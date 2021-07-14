import React from 'react';
import PropTypes from 'prop-types';

const TechCard = ({ title, img_url }) => {
   return (
      <div className="card">
         <img src={img_url} className="card-img-top" alt={title} />
         <div className="card-body">
            <h3 className="card-title">{title}</h3>
         </div>
      </div>
   );
};

TechCard.propTypes = {
   title: PropTypes.string,
   img_url: PropTypes.string,
};

export default TechCard;
