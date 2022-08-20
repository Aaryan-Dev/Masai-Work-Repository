import { useReducer, useState } from "react";

function reducer(State, action) {
  console.log(State);
  console.log(action);
  switch (action.type) {
    case "INCREASE":
      //   return State + action.amount;
      return {
        ...State,
        amount: State.amount + action.amount,
      };
    case "DEASREASE":
      return {
        ...State,
        amount: State.amount - action.amount,
      };
    default:
      return State;
  }
}

function UseReduce() {
  const [Value, setValue] = useState(0);

  const [State, Dispatch] = useReducer(reducer, { amount: 0 });

  console.log(State);
  return (
    <>
      <h2>Count : {State.amount}</h2>

      <input
        onChange={(event) => setValue(Number(event.target.value))}
        type="Number"
        placeholder="Type to add"
      />
      <button onClick={() => Dispatch({ type: "INCREASE", amount: Value })}>
        Add
      </button>
      <input
        onChange={(event) => setValue(Number(event.target.value))}
        type="Number"
        placeholder="Type to reduce"
      />
      <button onClick={() => Dispatch({ type: "DEASREASE", amount: Value })}>
        Reduce
      </button>
    </>
  );
}

export default UseReduce;
