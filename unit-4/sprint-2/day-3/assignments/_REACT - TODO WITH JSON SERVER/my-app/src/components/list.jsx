import { useState } from "react";

function List({ handle }) {
    const [task, setTask] = useState("");

    const prechange = () => (
     
        task !== "" ? handle(task) : null,
        setTask("")
    );

    return(
    <>
    <input
          onChange={(e) => setTask(e.target.value)}
          value={task}
          type="text"
          placeholder="Type task"
          />
        <h4>{task==""?"Todo App":task}</h4>
            <button onClick={prechange} >ADD TASK</button>
          </>
     
)} 

export default List;