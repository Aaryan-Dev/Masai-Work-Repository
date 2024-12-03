import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import Header from "./Header";
import TodosInput from "./TodosInput";
import TodosItem from "./TodosItem";

export interface ITodoItems {
  id: number;
  title: string;
  status: boolean;
}

const Todos = () => {
  //number[]
  //string[]

  const [todos, setTodos] = useState<ITodoItems[]>([]);

  const handleAdd = (title: string) => {
    const payload = {
      id: todos.length + 1,
      title,
      status: false,
    };
    console.log(payload);
    // setTodos([...todos, payload])
    axios
      .post("http://localhost:8080/todos", payload)
      .then(
        getTodos /* here not to use-  getTodo(), becasuse it will invoke the fuction before the completion of the previous promise, you can use `getTodos` or `()=>getTodos()` */
      );
  };

  const getTodos = () => {
    axios
      .get("http://localhost:8080/todos")
      .then((res: AxiosResponse<ITodoItems[]>) => {
        setTodos(res.data);
      });
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <Header lable="Todos" />
      <TodosInput handleAdd={handleAdd} />

      {todos.length > 0 &&
        todos.map((item) => {
          return <TodosItem key={item.id} {...item} />;
        })}
    </div>
  );
};
export default Todos;
