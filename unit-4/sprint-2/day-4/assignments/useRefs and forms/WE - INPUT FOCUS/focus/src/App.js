import logo from "./logo.svg";
import "./App.css";
import { useRef } from "react";

function App() {
  const what = useRef();

  console.log(what);
  const focus = (e) => {
    console.log(e);
    console.log(what);
    console.log(what.current);

    what.current.focus();
  };

  return (
    <div className="App">
      <header className="App-header">
        <input ref={what} type="text" placeholder="type" />

        <button onClick={focus}>Focus</button>
      </header>
    </div>
  );
}

export default App;
