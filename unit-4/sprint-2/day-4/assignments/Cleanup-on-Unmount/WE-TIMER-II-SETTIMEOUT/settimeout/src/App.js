import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { useState } from "react";

// Create a timer Component
// use setInterval
// start the timer automatically with an interval of 1 second
// use useEffect, and only apply it for mounting phase

function App() {
  const [counter, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((co) => co + 1);
    }, 1000);
  }, [counter]);

  // useEffect(() => {
  //   setInterval(() => {
  //     setCount((co) => co + 0.5);
  //   }, 1000);
  // }, []);
  return (
    <div className="App">
      <header className="App-header">
        <h3>count:{counter}</h3>
      </header>
    </div>
  );
}

export default App;
