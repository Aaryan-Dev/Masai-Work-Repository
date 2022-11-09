import axios from "axios";
import { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import Input from "./addInput";
import "./App.css";
import Counter, {
  addIt,
  failure,
  request,
  subIt,
  sucsess,
} from "./Redux/action";
import store from "./Redux/store";

function App() {
  const { todos, isLoading, isError } = useSelector((state) => {
    return {
      todos: state.todos,
      isError: state.isError,
      isLoading: state.isLoading,
    };
  }, shallowEqual);

  const dispatch = useDispatch();

  const getTodo = () => {
    dispatch(request());

    return axios
      .get("http://localhost:3000/posts")
      .then((res) => {
        console.log(res.data);
        dispatch(sucsess(res.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(failure());
      });
  };

  console.log("todo component is rendering");

  const AddIt = (text) => {
    console.log(text);

    let body = {
      title: text,
      status: false,
    };

    return axios
      .post("http://localhost:3000/posts", body)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAddTodo = (text) => {
    AddIt(text)
      .then(() => getTodo())
      .then(() => console.log("process complete"));
  };

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <Input addTodo={handleAddTodo} />

        {todos.map((el) => (
          <li> {el.title + "----" + el.status} </li>
        ))}
      </header>
    </div>
  );
}

export default App;
