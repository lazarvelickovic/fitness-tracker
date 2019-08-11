import React from 'react';
import IconContainer from './IconContainer';
import { tsPropertySignature } from '@babel/types';

function HomeSectionActivity(props) {
  return (
    <section className="home-section-activity">
      <div className="home-section-activity-flex">
        <IconContainer icon="timer" />
        <div>
          <p className="home-main-normal">Activity</p>
          <p className="home-main-small">Average</p>
        </div>
      </div>  
      <h2>{props.hours}h {props.minutes}min</h2>
    </section>
  );
}

export default HomeSectionActivity;