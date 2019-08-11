import React from 'react';

function DayButton(props) {
  return (
    <div>
      <p>{props.num}</p>
      <p>{props.name}</p>
    </div>
  );
}

export default DayButton;