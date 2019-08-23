/* Primary button: use this for most buttons.  */

import React from "react";

const ButtonPrimary = ({ text, onClickEvt, hideOnDesktop }) => {

  const hideClass = hideOnDesktop ? 'show-for-mobile' : ""
  return (
  <button
    className={`button is-primary ${hideClass}`}
    onClick={onClickEvt}
    type="button"
  >
    <span>{text}</span>
  </button>
)};

export default ButtonPrimary

