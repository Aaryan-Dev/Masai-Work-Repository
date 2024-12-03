import React from "react";
// import { useEffect } from "react";
import "../App.css";

const Display = ({ data, action }) => {
  const dele = (val) => {
    fetch("https://a-backend.onrender.com/delete", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: val }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        action();
        alert("Book is deleted");
      });
  };

  const book = (val) => {
    fetch("https://a-backend.onrender.com/bookmark", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: val }),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        action();
        alert("Bookmarked successfully");
      });
  };

  return (
    <>
      ITEMS
      <div id="display">
        {data.map((el) => (
          <div id="list" key={el._id}>
            <div>
              <b>Title</b> : {el.title}
            </div>
            <div>
              <b>Quantity</b> :{el.quantity}
            </div>
            <div>
              <b>Priority</b> :{el.priority}
            </div>
            <div>
              <b>Description</b> :{el.description}
            </div>
            <div>
              <pre>
                <b>CreatedAt</b> :{el.createdAt}
              </pre>
            </div>
            <div>
              <pre>
                <b>UpdatedAt</b> :{el.updatedAt}
              </pre>
            </div>
            <button id="book" onClick={() => book(el._id)}>
              Bookmark
            </button>
            <button id="dele" onClick={() => dele(el._id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export { Display };
