import { useDispatch, useSelector } from "react-redux";

// ************
export const addIt = (val) => {
  return { type: "ADD", payload: val };
};

export const subIt = (val) => {
  return { type: "SUB", payload: val };
};
// ************

// request
// sucsess
// failure

export const request = (val) => {
  return {
    type: "request",
    payload: val,
  };
};

export const sucsess = (val) => {
  return {
    type: "sucsess",
    payload: val,
  };
};

export const failure = (val) => {
  return {
    type: "failure",
    payload: val,
  };
};

const Counter = () => {
  const val = useSelector((state) => {
    return state.count;
  });

  const dispatch = useDispatch();

  return (
    <>
      <h3>Count :{val}</h3>

      <button onClick={() => dispatch(addIt(10))}>Add 10</button>
      <button onClick={() => dispatch(subIt(5))}>Sub 5</button>
    </>
  );
};

export default Counter;
