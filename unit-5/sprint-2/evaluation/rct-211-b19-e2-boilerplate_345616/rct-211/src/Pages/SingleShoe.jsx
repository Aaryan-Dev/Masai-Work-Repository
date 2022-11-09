import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import axios from "axios";

const SingleShoe = () => {
  const param = useParams();
  const [single, setSingle] = useState({});

  console.log(param.id);

  const getSingle = () => {
    axios
      .get(`http://localhost:8080/shoes/${param.id}`)
      .then((res) => {
        console.log(res.data);
        setSingle(res.data);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    getSingle();
  }, []);

  return (
    <div>
      <h2>{single.name}</h2>
      <div>
        <img src={single.image} alt="Cover Pic" width="300px" />
      </div>
      <div>
        <div>{single.category}</div>
      </div>
    </div>
  );
};

export default SingleShoe;
