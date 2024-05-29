import React from 'react';

const Details = ({ bodyPart, gifUrl, name, target }) => {
  return (
    <div className="details-container">
      <h3>{name}</h3>
      <img src={gifUrl} alt={name} />
      <p>Body Part: {bodyPart}</p>
      <p>Target: {target}</p>
    </div>
  );
};

export default Details;
