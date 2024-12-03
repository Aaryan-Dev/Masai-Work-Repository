import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCount = () => {
    axios
      .post("http://localhost:8080/counter", { value: counter + 1 })
      .then((r) => setCounter(r.data.value));
  };

  const fetchData = () => {
    console.log("");
    axios.get("http://localhost:8080/counter").then(({ data }) => {
      console.log("Received data", data.value);
      setCounter(data.value);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Counter Application</h1>

      <h3>
        The current count is <b>{counter}</b>
      </h3>

      <button className="increment_count" onClick={incrementCount}>
        Add
      </button>
      <button
        className="decrement_count"
        onClick={(e) => setCounter((p) => p - 1)}
      >
        Reduce
      </button>
    </div>
  );
}

export default App;
