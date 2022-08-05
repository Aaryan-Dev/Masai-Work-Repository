import { useEffect, useState } from "react";
import "./App.css";
import UserDetails from "./components/UserDetails";
// import data from db.json

function App() {
  const [data, setData] = useState([]);
  const url =
    "https://masai-course.s3.ap-south-1.amazonaws.com/editor/uploads/2022-06-22/db_720032.json";

  const getdata = () =>
    fetch(url).then((res) => {
      return res.json();
    });

  useEffect(() => {
    getdata().then((res) => {
      console.log(res);
      setData(res);
    });

    // return setData([]);
  }, []);

  const change = (id) => {
    let newdata = data.map((el) =>
      el.id === id ? { ...el, is_following: !el.is_following } : el
    );
    setData(newdata);
  };

  const sortAsc = () => {
    //
    let ascdata = data.sort((a, b) => {
      if (a.first_name > b.first_name) {
        return 1;
      } else if (b.first_name > a.first_name) {
        return -1;
      } else {
        return 0;
      }
    });

    console.log(ascdata);
    let newdata = ascdata.map((el) => el);
    setData(newdata);
  };

  const sortDecs = () => {
    const decsdata = data.sort((a, b) => {
      if (a.first_name < b.first_name) {
        return 1;
      } else if (b.first_name < a.first_name) {
        return -1;
      } else {
        return 0;
      }
    });
    console.log(decsdata);
    let newdata = decsdata.map((el) => el);
    setData(newdata);
  };

  return (
    <div className="App" data-testid="app">
      <button onClick={sortAsc} data-testid="sort-asc-btn">
        Sort by Asc
      </button>
      <button onClick={sortDecs} data-testid="sort-desc-btn">
        Sort by Desc
      </button>
      {data.map((el) => (
        <UserDetails
          id={el.id}
          avatar={el.avatar}
          first_name={el.first_name}
          last_name={el.last_name}
          address={el.address}
          karma={el.karma}
          followers={el.followers}
          posts={el.posts}
          is_following={el.is_following}
          change={change}
        />
      ))}
    </div>
  );
}

export default App;
