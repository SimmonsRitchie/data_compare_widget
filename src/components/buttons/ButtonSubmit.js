/* This is submit button used in our app. Insert this within form 
components so that pressing enter will work as a button press.  */

import React from "react";

const ButtonSubmit = ({ text, onClickEvt }) => {
  return (
  <button
    type="submit"
    className="button is-primary is-fullwidith"
  >
    <span>{text}</span>
  </button>
)};

export default ButtonSubmit

