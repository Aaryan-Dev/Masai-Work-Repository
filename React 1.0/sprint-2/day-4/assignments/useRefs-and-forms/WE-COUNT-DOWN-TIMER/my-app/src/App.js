import logo from "./logo.svg";
import "./App.css";
import { useRef, useState } from "react";

// create a timer application with a start, pause and reset functionality which also cleans up on unmount
// the timer should not run multiple times ( as in if a user clicks on start again and again )
// it should accept initial value as a property
// when reset it should goto initial time
// the timer should reduce to 0
// when 0 it should stop

function App() {
  const [time, setTime] = useState(0);

  const ref = useRef(null);

  const startTimer = () => {
    if (ref.current !== null) return;
    ref.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
    console.log(ref);
  };

  const stoptimer = () => {
    clearInterval(ref.current);
    ref.current = null;
  };

  const restTimer = () => {
    setTime(0);
    clearInterval(ref.current);
    ref.current = null;
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>{time}</h2>
        <button onClick={startTimer}>Strat</button>
        <button onClick={stoptimer}>Pause</button>
        <button onClick={restTimer}>Reset</button>
      </header>
    </div>
  );
}

export default App;
