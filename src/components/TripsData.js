import React from 'react';
import './Trip.css';

export const TripsData = (props) => {
  return (
    <div className='trip-card'>
      <div className='trip-image'>
        <img alt='Image' src={props.image}/> 
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div>
  )
}
