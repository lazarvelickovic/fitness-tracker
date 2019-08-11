import React from 'react';
import HomeSectionActivity from './HomeSectionActivity';
import HomeSectionStepsCalories from './HomeSectionStepsCalories';

function HomeMainContent(props) {
  return (
    <main className="animation-slide-in">
      <HomeSectionActivity hours={props.hours} minutes={props.minutes} />
      <HomeSectionStepsCalories icon="directions_run" name="Steps" description="Total" result={props.steps} />
      <HomeSectionStepsCalories icon="whatshot" name="Calories" description="Total Burned" result={props.calories} />
    </main>
  );
}

export default HomeMainContent;