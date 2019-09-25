import React from 'react';

// TODO: Add loader gif/animation

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