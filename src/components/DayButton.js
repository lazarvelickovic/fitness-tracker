import React from 'react';

function DayButton(props) {
  let func = props.func;

  return (
    <div onClick={func ? (e) => func(e, props.num, props.dayName, props.id) : null} className="day-button" >
      <p>{props.num}</p>
      <p>{props.name}</p>
    </div>
  );
}

export default DayButton;