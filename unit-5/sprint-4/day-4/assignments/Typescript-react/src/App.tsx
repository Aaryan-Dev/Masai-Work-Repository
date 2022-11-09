import React from "react";

import "./App.css";
import Counter from "./Components/Counter";
import Todos from "./Components/Todos";

function App() {
  return (
    <div className="App">
      ---simple useSate---
      <Counter />
      ---👇 Axios response---
      <Todos />
    </div>
  );
}

export default App;
