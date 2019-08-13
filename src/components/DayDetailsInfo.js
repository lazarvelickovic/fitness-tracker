import React from 'react';

function DayDetailsInfo(props) {
  return (
    <div className="day-detail-info">
      <p>{props.name}</p>
      <h3>{props.res}</h3>
    </div>
  );
}

export default DayDetailsInfo;