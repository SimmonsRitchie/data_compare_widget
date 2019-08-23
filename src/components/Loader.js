import React from 'react';
import {ClipLoader} from 'halogenium'

const Loader = ({display = true}) => {
  const spotlightBlue = "#009edb"
  const defaultGreen = "#26A65B"
  return (
    <div>
      {display &&
        <div className="loader__container">
        <ClipLoader color={defaultGreen} size="100px" margin="4px"/>
        </div>
      }
    </div>
  )}


export default Loader