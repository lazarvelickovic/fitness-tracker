import React from 'react';

function IconContainer(props) {
  return (
    <div className={"icon-container " + props.cname}>
        <i className="material-icons">{props.icon}</i>
    </div>
  );
}

export default IconContainer;