import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { useEffect } from "react";
import PinInput from "./PinInput";
import "../App.css";

const Pin = ({ length, setPin }) => {
  const [inputBoxLen] = useState(new Array(length).fill("a"));
  const [inputBoxValue] = useState(new Array(length).fill(""));
  const inputRef = useRef([]);

  useEffect(() => {
    console.log(inputRef);
  }, []);

  const onChangeHandler = (e, index) => {
    inputBoxValue[index] = e.target.value;
    if (e.target.value.length > 0 && index < length - 1) {
      inputRef.current[index + 1].focus();
    }
    setPin(inputBoxValue.join(""));
  };

  const backspaceHandler = (e, index) => {
    if (index > 0) {
      inputRef.current[index - 1].focus();
    }
    inputBoxValue[index] = e.target.value;
    setPin(inputBoxValue.join(""));
  };

  const handlePaste = (e) => {
    // how to access the data that the user is pasing
    // only get the first characters based on the input length
    // then map each input box with those characters

    e.preventDefault();
    const data = e.clipboardData
      .getData("text")
      .split("")
      .filter((_, index) => index < length);

    data.forEach((character, index) => {
      inputBoxValue[index] = character;
      inputRef.current[index].value = character;
      if (index < length - 1) {
        inputRef.current[index + 1].focus();
      }
    });
  };

  return (
    <div onPaste={handlePaste}>
      {inputBoxLen.map((_, index) => {
        return (
          <PinInput
            key={index}
            ref={(element) => (inputRef.current[index] = element)}
            onChangeHandler={(e) => onChangeHandler(e, index)}
            onBackspace={(e) => backspaceHandler(e, index)}
          />
        );
      })}
    </div>
  );
};

// .focus()

/*
1. To store mutable data, that does not re-render the React component
2. To access DOM nodes directly

current: {}
const refStorage = useRef(initialValue) ; initialValue: string, number, func, HTML elements.. etc.

Access data: refStorage.current
Update data: refStorage.current = "new data"
*/

export default Pin;

//basic check for your props
// propTypes !== ProtoTypes
Pin.propTypes = {
  length: PropTypes.number.isRequired,
  setPin: PropTypes.func,
};

// how to access the data that the user is pasting.
