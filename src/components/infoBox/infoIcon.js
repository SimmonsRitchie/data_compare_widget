import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react'

const InfoIcon = ({icon}) => (
  <div className="info-icon__container">
  <FontAwesomeIcon
  size="2x"
  icon={icon}
/>
  </div>

)

export default InfoIcon