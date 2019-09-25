import React from 'react';

const Loader = ({display = true}) => {
  const spotlightBlue = "#009edb"
  return (
    <div>
      {display &&
        <div className="loader__container">
        Loading...
        </div>
      }
    </div>
  )}


export default Loader