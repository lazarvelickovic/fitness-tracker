import React from 'react';
import IconContainer from './IconContainer';
import DayDetailsInfo from './DayDetailsInfo';

function DayDetailsMainContent() {
  return (
    <main className="main-day-details animation-slide-in">
      <div className="main-day-details-circle">
        <IconContainer cname="main-day-details-icon" icon="directions_run" />
        <p>Steps</p>
        <h2>7,542</h2>
      </div>
      <div className="main-day-details-middle">
        <p>Very good</p>
        <h2>Keep going!</h2>
      </div>
      <div className="day-details-info-container">
        <DayDetailsInfo name="km" />
        <DayDetailsInfo name="cal" />
        <DayDetailsInfo name="hours" />
      </div>
    </main>
  );
}

export default DayDetailsMainContent;