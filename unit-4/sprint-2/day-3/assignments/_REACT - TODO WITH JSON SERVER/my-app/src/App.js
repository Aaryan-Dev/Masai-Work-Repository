import logo from "./logo.svg";
import "./App.css";
import List from "./components/list";
import { useState } from "react";

const url = "http://localhost:3000/todo";

function App() {
  const [data, setData] = useState([]);

  const handle = (task) => {
    console.log(task);

    const newItem = {
      task: task,
    };

    let body1 = JSON.stringify(newItem);

    fetch(url, {
      method: "POST",
      body: body1,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => console.log(res));

    setData([...data, newItem]);
  };

  const getTask = () => {
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then(
        (res) => setData(res)
        // console.log(res)
      );
  };

  return (
    <div className="App">
      <header className="App-header">
        <List handle={handle} />
        <button onClick={getTask}> GET TASK </button>
        {data.map((el) => (
          <li>{el.task}</li>
        ))}
      </header>
    </div>
  );
}

export default App;
