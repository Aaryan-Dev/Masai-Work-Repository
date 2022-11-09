import React, { useState } from "react";
import { useCallback } from "react";
import TodoItems from "./TodoItems";

const initialState = [
  {
    id: 1,
    title: "Learn React",
    status: false,
  },
  {
    id: 2,
    title: "Learn Redux",
    status: false,
  },
  {
    id: 3,
    title: "Learn TypeScript",
    status: false,
  },
];

const Todos = () => {
  const [currentTodo, setCurrentTodo] = useState("");
  const [todos, setTodos] = useState(initialState);

  const handleTodoChange = (e) => {
    setCurrentTodo(e.target.value);
  };

  const handleAddTask = () => {
    const payload = {
      id: todos.length + 1,
      status: false,
      title: currentTodo,
    };
    setTodos([...todos, payload]);
    setCurrentTodo("");
  };

  //memo-> if the input changes, then calculate it, else return the old state
  //   const handleToggle = useCallback(
  //     (id) => {
  //       let newTodos = todos.map((item) => {
  //         return item.id === id ? { ...item, status: !item.status } : item;
  //       });
  //       setTodos(newTodos);
  //     },
  //     [todos]
  //   );

  const handleToggle = useCallback((id) => {
    setTodos((prev) =>
      prev.map((item) => {
        return item.id === id ? { ...item, status: !item.status } : item;
      })
    );
  }, []);

  //   const handleDelete = useCallback(
  //     (id) => {
  //       let newTodos = todos.filter((item) => item.id !== id);
  //       setTodos(newTodos);
  //     },
  //     [todos]
  //   );

  const handleDelete = useCallback((id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  }, []);

  //useEffect
  // useEffect(() => {
  //        logic
  //   }, [])

  //useCallback
  //useCallback(() => {
  //  returns a memoized callback function
  //   }, [])

  //useMemo

  return (
    <div>
      <h1>Todos</h1>
      <input value={currentTodo} onChange={handleTodoChange} />
      <button onClick={handleAddTask}>Add Todos</button>
      {todos.length &&
        todos.map((item) => {
          return (
            <TodoItems
              key={item.id}
              {...item}
              handleDelete={handleDelete}
              handleToggle={handleToggle}
            />
          );
        })}
    </div>
  );
};

export default Todos;
