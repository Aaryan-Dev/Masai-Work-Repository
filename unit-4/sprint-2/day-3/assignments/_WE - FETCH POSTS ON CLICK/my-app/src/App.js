// Problem
// "https://jsonplaceholder.typicode.com/posts"
// use the above api
// when a user clicks on get posts retrieve all the info and display to UI

import logo from "./logo.svg";
import "./App.css";
import Display from "./component/display";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);

  const url = "https://jsonplaceholder.typicode.com/posts";
  const getdata = () =>
    fetch(url).then((res) => {
      return res.json();
    });

  const displayData = () => {
    getdata().then((res) => setData(res));
  };

  return (
    <>
      {/* <div className="App"> */}
      <header className="App-header">
        <button onClick={displayData}>See Post</button>
        {/* {go} */}
        <Display data={data} />
      </header>
      {/* </div> */}
    </>
  );
}

export default App;
