import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Card from "./components/card";
// use mock server
// create a todo application where a user can do CRUD operations
// create a new task
// delete a new task
// retrieve all tasks on load
// toggle a status
// delete a status
// use axios
// use different ways to use axios
// axios.get
// axios.post
// axios.put / patch
// axios.delete
// create loading and error state

function App() {
  const [data, setData] = useState([]);
  const [todo, setTodo] = useState("");

  const handle = () => {
    //handle
    axios
      .post("http://localhost:3000/todo", {
        task: todo,
        status: false,
      })
      .then((res) => {
        getMe();
      });
  };

  useEffect(() => {
    //api

    getMe();
  }, []);

  const getMe = () => {
    axios
      .get("http://localhost:3000/todo")
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const del = (id) => {
    console.log(id);
    axios({
      baseURL: "http://localhost:3000/todo",
      url: `${id}`,
      method: "DELETE",
    }).then((res) => {
      getMe();
    });
  };

  const tog = (ID) => {
    let value;

    data.map(
      (el) => (console.log(el.status), el.id === ID ? (value = !el.status) : el)
    );

    fetch(`http://localhost:3000/todo/${ID}`, {
      method: "PATCH",
      body: JSON.stringify({
        status: value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        // console.log(res);
        getMe();
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <input
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="Type to do"
        />
        <button onClick={handle}>Add</button>

        <Card data={data} dele={del} toggle={tog} />
      </header>
    </div>
  );
}

export default App;
