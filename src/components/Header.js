import React from 'react';

function Header() {
  return (
    <header className="animation-slide-in">
      <div>
        <h1>Welcome!</h1>
        <p>Overview of your activity</p>
      </div> 
    </header>
  );
}

// function Header() {
//   return (
//     <header className="header-day-details animation-slide-in">
//       <div className="arrow-left">
//         <i className="material-icons">chevron_left</i>
//       </div>
//       <div>
//         <h1>Tuesday</h1>
//         <p>June 21, 2019.</p>
//       </div>   
//     </header>
//   );
// }

export default Header;