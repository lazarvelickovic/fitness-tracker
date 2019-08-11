import React from 'react';
import IconContainer from './IconContainer';

function HomeSectionStepsCalories(props) {
  return (
    <section className="home-section-steps-calories">
      <div className="home-section-steps-calories-flex">
        <IconContainer icon={props.icon} />
        <div>
          <p className="home-main-normal">{props.name}</p>
          <p className="home-main-small">{props.description}</p>
        </div>
      </div>  
      <h2>{props.result}</h2>
    </section>
  );
}

export default HomeSectionStepsCalories;