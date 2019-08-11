import React from 'react';

function IconContainer(props) {
  /* <i className="material-icons">timer</i>
  <i className="material-icons">directions_run</i>
  <i className="material-icons">whatshot</i>
  <i className="material-icons">chevron_left</i> */
  return (
    <div className={"icon-container " + props.cname}>
        <i className="material-icons">{props.icon}</i>
    </div>
  );
}

export default IconContainer;