import React from "react";
import "./trigger.css";
import '../index.css';
const Trigger = ({ triggerText, buttonRef, showModal }) => {
  return (
    <button
      className="btn btn-md btn-danger center modal-button"
      ref={buttonRef}
      onClick={showModal}
    >
      {triggerText}
    </button>
  );
};
export default Trigger;
