import { useState } from "react";
import store from "../Redux/store";

const Displ = () => {
  console.log(store);
  const { count } = store.getState();
  const { subscribe } = store;
  const [state, setState] = useState(0);

  const forceUpdate = () => setState((prev) => prev + 1);

  subscribe(() => {
    forceUpdate();
  });

  return (
    // <>
    <h2>Count : {count}</h2>
    // </>
  );
};

export default Displ;
