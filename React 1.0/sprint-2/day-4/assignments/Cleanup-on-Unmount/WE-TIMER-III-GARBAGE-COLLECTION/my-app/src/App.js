import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(false);

  const Unmount = () => {
    useEffect(() => {
      const id = setInterval(() => {
        console.log("going");
        setCount((c) => c + 1);
      }, 1000);

      const cleanup = () => {
        clearInterval(id);
      };
      return cleanup;
    }, []);

    if (!value) {
      return <h4>Count-{count}</h4>;
    } else {
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {!value && <Unmount />}
        <button onClick={() => setValue(!value)}>
          {value == false ? "Hide" : "Show"}
        </button>
      </header>
    </div>
  );
}

export default App;
