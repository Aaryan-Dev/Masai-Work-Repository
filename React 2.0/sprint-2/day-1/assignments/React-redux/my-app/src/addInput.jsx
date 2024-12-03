import { useState } from "react";

const Input = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleAdd = () => {
    addTodo(text);
    setText("");
  };

  return (
    <>
      <h2>Todo</h2>

      <input
        onChange={(e) => setText(e.target.value)}
        value={text}
        type="text"
      ></input>
      <button onClick={handleAdd}> Add todo</button>
    </>
  );
};

export default Input;
