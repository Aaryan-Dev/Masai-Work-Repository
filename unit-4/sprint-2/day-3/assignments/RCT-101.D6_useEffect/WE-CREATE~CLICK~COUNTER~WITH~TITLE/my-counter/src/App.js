import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${count} times`;
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h2>{count}</h2>
        <button onClick={() => setCount(count + 1)}> Click</button>
      </header>
    </div>
  );
}

export default App;
