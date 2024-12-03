import { useState } from "react";

function Card({ data, toggle, dele }) {
  return (
    <>
      {data.map((el) => (
        <div>
          <li>{el.task}</li>
          <h6> {el.status === false ? "Not Done" : "Done"} </h6>
          <button onClick={() => toggle(el.id)}>Toggle</button>
          <button onClick={() => dele(el.id)}>Delete</button>
          <hr />
        </div>
      ))}
    </>
  );
}

export default Card;
