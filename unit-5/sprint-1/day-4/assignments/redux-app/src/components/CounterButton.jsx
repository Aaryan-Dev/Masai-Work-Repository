import store from "../Redux/store";
import { addIt, subIt } from "../Redux/action";

function Buttondis() {
  const { dispatch } = store;

  return (
    <>
      <button onClick={() => dispatch(addIt(10))}>ADD 10</button>

      <button onClick={() => dispatch(subIt(5))}>SUBTRACT 5</button>
    </>
  );
}

export default Buttondis;
