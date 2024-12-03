import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [load, setLoad] = useState(true);
  const [data, setData] = useState([]);
  const getdata = () =>
    fetch(
      "https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2022-06-22/db_720032.json"
    ).then((res) => {
      return res.json();
    });

  useEffect(() => {
    getdata()
      .then((res) => {
        setData(res);
        console.log(res);
        setLoad(false);
      })
      .catch((err) => {
        // setLoad(false);
        console.log(err);
      });
  }, []);

  // if (load) {
  //   return <h3>Loading...</h3>;
  // }

  return (
    <div className="App">
      <header className="App-header">
        <h3> {load == true ? "Loading..." : ""} </h3>
        <h4>Todo App</h4>
        {data.map((el) => (
          <li>{el.first_name}</li>
        ))}
      </header>
    </div>
  );
}

export default App;
