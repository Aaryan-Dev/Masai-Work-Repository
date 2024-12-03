/* 
1. Complete the useCounter hook functionality here
2. Feel free to change any boilerplate logic present inside this custom hook
3. DO NOT CHANGE the name `useCounter` of this custom hook
*/

import { useState } from "react";

export const useCounter = (obj) => {
  const { initialValue, minValue, maxValue } = obj;
  const [countValue, setCount] = useState(initialValue);

  console.log(initialValue);
  // const countValue = initialValue;
  const incCount = (val = 1) => {
    setCount((prev) => prev + val);
  };
  const decCount = (val = 1) => {
    setCount((prev) => prev - val);
  };

  return {
    countValue,
    incCount,
    decCount,
  };
};
