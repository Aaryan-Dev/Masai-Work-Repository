import "./App.css";
import Buttondis from "./components/CounterButton";
import Displ from "./components/Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Buttondis />
        <Displ />
      </header>
    </div>
  );
}

export default App;
