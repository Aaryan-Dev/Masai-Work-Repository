import { useReducer } from "react";

// reducer function
function reducer(state, action) {
  switch (action.type) {
    case "INCREAMENT_COUNT":
      return state + action.amount;
    case "DEACREAMNT_COUNT":
      return state + action.amount;
    case "RESET_COUNT":
      return action.amount;

    default:
      return state;
  }

  //   if (action.type === "INCREAMENT_COUNT") {
  //     return state + 1;
  //   }
  //   if (action.type === "DEACREAMNT_COUNT") {
  //     return state - 1;
  //   }
  //   if (action.type === "RESET_COUNT") {
  //     return 0;
  //   }
  //     return state;
}

function Counter() {
  //use Reducer accepts reducer function and initial value of state;
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <>
      <h2>Counter:{state}</h2>
      <button
        onClick={() =>
          dispatch({ type: "INCREAMENT_COUNT", amount: 1 /*payload*/ })
        }
      >
        Add
      </button>
      <button
        onClick={() =>
          dispatch({ type: "DEACREAMNT_COUNT", amount: -1 /*payload*/ })
        }
      >
        Reduce
      </button>
      <button
        onClick={() => dispatch({ type: "RESET_COUNT", amount: 0 /*payload*/ })}
      >
        Reset
      </button>
    </>
  );
}

export default Counter;
