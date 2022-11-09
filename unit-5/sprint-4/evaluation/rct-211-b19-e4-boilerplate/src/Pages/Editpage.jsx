import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { editData } from "../Redux/action";

let initial = {
  title: "",
  price: "",
};
const Editpage = () => {
  const param = useParams();
  const dispatch = useDispatch();

  const [form, setForm] = useState(initial);

  const handleAdd = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const updateIt = () => {
    // console.log(form, param.id);
    dispatch(editData(form, param.id));
  };

  console.log(form);

  return (
    <div style={{ width: "fit-content", margin: "auto", fontSize: "20px" }}>
      <h3>Edit page</h3>
      <div>
        <label>Product Title</label>
        <input
          name="title"
          onChange={handleAdd}
          data-cy="edit-product-title"
          type="text"
        />
      </div>
      <div>
        <label>Product Price</label>
        <input
          name="price"
          onChange={handleAdd}
          data-cy="edit-product-price"
          type="number"
        />
      </div>
      <div style={{ textAlign: "right", padding: "5px 0" }}>
        <button onClick={() => updateIt()} data-cy="update-button">
          Update
        </button>
      </div>
    </div>
  );
};

export default Editpage;
