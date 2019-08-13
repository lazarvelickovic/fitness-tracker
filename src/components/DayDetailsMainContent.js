import React from 'react';
import IconContainer from './IconContainer';
import DayDetailsInfo from './DayDetailsInfo';

function DayDetailsMainContent(props) {
  return (
    <main className="main-day-details animation-slide-in">
      <div className="main-day-details-circle">
        <IconContainer cname="main-day-details-icon" icon="directions_run" />
        <p>Steps</p>
        <h2>{props.daySteps}</h2>
      </div>
      <div className="main-day-details-middle">
        <p>Very good</p>
        <h2>Keep going!</h2>
      </div>
      <div className="day-details-info-container">
        <DayDetailsInfo name="km" res={props.dayKm} />
        <DayDetailsInfo name="cal" res={props.dayCal} />
        <DayDetailsInfo name="hours" res={props.dayHours} />
      </div>
    </main>
  );
}

export default DayDetailsMainContent;