import React from 'react';
import '../style/Details.css';
import '@fortawesome/fontawesome-free/css/all.css';

const Details = ({ bodyPart, gifUrl, name, target, equipment }) => {
  return (
    <div className="details-container">
      <img src={gifUrl} alt={name} className="details-image" />
      <div className="details-content">
        <h3 className="details-title">{name}</h3>
        <p className="details-description">
          Exercise fortifies your body. <span className="details-target">{name}</span> is exceptional for targeting your <span className="details-target">{target}</span>. Incorporating this exercise into your routine will not only enhance your mood but also infuse you with revitalizing energy.
        </p>
        <div className="details-info">
          <div className="details-info-item">
            <i className="fas fa-walking details-icon"></i>
            <p>{bodyPart}</p>
          </div>
          <div className="details-info-item">
            <i className="fas fa-bullseye details-icon"></i>
            <p>{target}</p>
          </div>
          <div className="details-info-item">
            <i className="fas fa-dumbbell details-icon"></i>
            <p>{equipment}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
