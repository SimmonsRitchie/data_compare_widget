/* Secondary button: use this for 'cancel' or 'back' buttons. */

import React from "react";

const ButtonSecondary = ({ text, onClickEvt }) => {

  return (
  <button
    type="button"
    className="button is-fullwidith"
    onClick={onClickEvt}
  >
    <span>{text}</span>
  </button>
)};

export default ButtonSecondary;

