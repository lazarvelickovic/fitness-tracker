import React from 'react';
import LoaderGif from '../images/loader.gif' 

function Loader() {
  return (
    <div className='loader'>
        <div className="loader-item">
            <img src={LoaderGif} alt="Loader"/>
        </div>
    </div>
  );
}

export default Loader;