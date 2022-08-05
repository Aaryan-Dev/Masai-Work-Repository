import { useState } from "react";
import ListItem from "./ListItem";

function AddItem() {
  const [task, setTask] = useState("");
  const [data, setData] = useState([]);

  function handleAdd() {
    let newItem = {
      id: `${Date.now}${task}`,
      title: task,
      status: false
    };
    setData([...data, newItem]);
    setTask("");

    // return data;
  }

  function Here(props) {
    const { arr } = props;
    let final = arr.map((el) => <li>{el.title}</li>);

    return <>{final}</>;
  }

  return (
    <div>
      <input
        onChange={(e) => {
          setTask(e.target.value);
        }}
        value={task}
        data-testid="input"
        placeholder="add something"
      />
      <button
        disabled={data.length === 5}
        onClick={handleAdd}
        data-testid="add-btn"
      >
        ADD
      </button>
      <h2>{task}</h2>
      <Here arr={data} />
      <ListItem arr={data} />
    </div>
  );
}

export default AddItem;
