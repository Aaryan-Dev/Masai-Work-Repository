import React, { useState } from "react";
import { useEffect } from "react";
import "../App.css";

const Bookmarks = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://a-backend.onrender.com/getbookmark")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        setData(res.mark_data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      BOOKMARKS
      <div id="display">
        {data.length > 0
          ? data.map((el) => (
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
              </div>
            ))
          : null}
      </div>
    </>
  );
};

export default Bookmarks;
