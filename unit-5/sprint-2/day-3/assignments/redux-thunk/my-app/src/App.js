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
} from "./AppRedux/action";
import IIInput from "./authInput/input";
import store from "./store";
import { saveSuth } from "./utils/appLocalstorage";
import { getTodo } from "./AuthReducer/action";

function App() {
  const { todos, isAuth, isLoading, isError } = useSelector((state) => {
    return {
      todos: state.appReducer.todos,
      isAuth: state.appReducer.isAuth,
      isError: state.appReducer.isError,
      isLoading: state.appReducer.isLoading,
    };
  }, shallowEqual);

  const dispatch = useDispatch();

  useEffect(() => {
    // Convet this---> // getTodo(dispatch); to this👇 using middleWare/react-thunk
    dispatch(getTodo); /*  to use middle ware with this */
  }, []);

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
      .then(() => dispatch(getTodo) /*  to use middle ware with this */)
      .then(() => console.log("process complete"));
  };

  const authIt = (form) => {
    console.log(form);
    dispatch({ type: "notdone" });

    axios
      .post("https://reqres.in/api/login", form)
      .then((res) => {
        console.log(res.data);
        saveSuth(res.data.token);
        dispatch({ type: "done" });
      })
      .catch((err) => {
        console.log(err.data);
        dispatch({ type: "notdone" });
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <Counter />

        <IIInput takeform={authIt} />

        <Input addTodo={handleAddTodo} />

        {isAuth &&
          todos.map((el) => <li> {el.title + "----" + el.status} </li>)}
      </header>
    </div>
  );
}

export default App;
