import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Sidebar = () => {
  const dispatch = useDispatch();
  const datas = useSelector((data) => data.products);
  const [data, setData] = useState(datas);
  const [type, setType] = useState("");

  const handle = (e) => {
    // console.log(e.target.checked);
    if (e.target.checked === true) {
      setType(e.target.value);
    }
  };

  // useEffect(() => {
  //   if (type === "asc") {
  //     // console.log(datas);
  //     datas.sort(function (a, b) {
  //       if (Number(a.price) - Number(b.price) > 0) {
  //         return 1;
  //       } else if (Number(a.price) - Number(b.price) < 0) {
  //         return -1;
  //       } else {
  //         return 0;
  //       }
  //     });
  //     setData(datas);
  //   } else {
  //     datas.sort(function (a, b) {
  //       if (Number(a.price) - Number(b.price) > 0) {
  //         return -1;
  //       } else if (Number(a.price) - Number(b.price) < 0) {
  //         return 1;
  //       } else {
  //         return 0;
  //       }
  //     });
  //     setData(datas);
  //   }
  // }, [type]);

  // console.log(data);

  return (
    <div style={{ minWidth: "250px" }}>
      <h3>Sort By</h3>
      <div>
        <div>
          <input
            onChange={(e) => handle(e)}
            checked={type === "asc"}
            type="checkbox"
            data-cy="asc"
            value="asc"
          />
          <label>Ascending</label>
        </div>
        <div>
          <input
            onChange={(e) => handle(e)}
            checked={type === "desc"}
            type="checkbox"
            data-cy="desc"
            value="desc"
          />
          <label>Descending</label>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
