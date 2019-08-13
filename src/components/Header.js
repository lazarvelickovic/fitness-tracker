import React from 'react';

function Header(props) {
  let home = props.home;

  return (
    <header className={home ? "animation-slide-in " : "header-day-details animation-slide-in"}>
      {home ? null : <div className="arrow-left" onClick={props.func}><i className="material-icons">chevron_left</i></div>}  
      <div>
        <h1>{home ? 'Welcome!': props.dateD}</h1>
        <p>{home ? 'Overview of your activity': 'June '+ props.dateNum + ', 2019.'}</p>
      </div> 
    </header>    
  );
}

export default Header;