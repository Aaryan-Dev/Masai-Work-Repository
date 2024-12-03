import React, { forwardRef } from "react";
import "../App.css";

const PinInput = forwardRef(({ onChangeHandler, onBackspace }, ref) => {
  const handleKeyUp = (e) => {
    console.log(e.keyCode);
    // if the user has clicked on the Backspace button
    //logic
    //else
    //default logic
    if (e.keyCode === 8 && !e.target.value) {
      //backspace logic
      onBackspace(e);
    } else {
      onChangeHandler(e);
    }
  };

  return (
    <input
      className="input_box"
      ref={ref}
      maxLength={1}
      onKeyUp={handleKeyUp}
      //    onChange={onChangeHandler}
    />
  );
});

export default PinInput;
