import "./App.css";
import { Some as Button } from "./Components/Button";
// import { Button } from "./Components/Button";
import { Some as Input } from "./Components/Input";
import { useCounter } from "./hooks/useCounter";

function App() {
  /*
  1. Implement only the hook functionality inside hooks/useCounter.js
  2. Create the custom components, inside the respective files of Image.jsx and Image.jsx
  3. The application should function properly after the implimentation of hooks and Custom components
  */

  const { countValue, incCount, decCount } = useCounter({
    initialValue: 10,
    minValue: 5,
    maxValue: 15,
  });

  return (
    <div className="App">
      {/* DO NOT CHANGE the 5 lines below   */}
      <h3>Value: {countValue}</h3>
      <button
        className="but"
        disabled={countValue >= 15}
        onClick={() => incCount()}
      >
        Increment
      </button>
      <button
        className="but"
        disabled={countValue >= 15 - 3}
        onClick={() => incCount(3)}
      >
        Increment 3
      </button>
      <button
        className="but"
        disabled={countValue <= 5 + 2}
        onClick={() => decCount(2)}
      >
        Decrement 2
      </button>
      <button
        className="but"
        disabled={countValue <= 5 + 4}
        onClick={() => decCount(4)}
      >
        Decrement 4
      </button>
      <button
        className="but"
        disabled={countValue <= 5}
        onClick={() => decCount()}
      >
        Decrement
      </button>

      <br />
      {/* You can pass the required props as mentioned in the questions to
      check if the components are working properly */}
      <Button colorScheme={"teal"} size={"md"} variant={"solid"} />
      <br />
      <Input
        className="input"
        type="text"
        size="md"
        variant="solid"
        onChange={(e) => {
          console.log(e.target.value);
          return e.target.value;
        }}
      />
      <h6></h6>
    </div>
  );
}

export default App;
