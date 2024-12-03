import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addData, getData } from "../Redux/action";

let initial = {
  title: "",
  image: "",
  price: "",
  category: "",
};

const AddProduct = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState(initial);

  const handleAdd = (e) => {
    const { name, value } = e.target;
    // console.log(name);
    setForm({ ...form, [name]: value });
  };

  const addIt = () => {
    dispatch(addData(form));
  };

  return (
    <div>
      <h3>Add Product</h3>
      <div>
        <div>
          <label>Product title</label>
          <input
            name="title"
            onChange={handleAdd}
            data-cy="add-product-title"
            type="text"
          />
        </div>
        <div>
          <label>Product Category</label>
          <select
            name="category"
            onChange={handleAdd}
            data-cy="add-product-category"
          >
            <option value="">Select Category</option>
            <option value="Electronics">Electronics</option>
            <option value="Cosmetics">Cosmetics</option>
            <option value="Shoes">Shoes</option>
          </select>
        </div>
        <div>
          <label>Product Image</label>
          <input
            name="url"
            onChange={handleAdd}
            data-cy="add-product-image"
            type="url"
            placeholder="Image URL"
          />
        </div>
        <div>
          <label>Product Price</label>
          <input
            name="price"
            onChange={handleAdd}
            data-cy="add-product-price"
            type="text"
          />
        </div>
        <div>
          <button onClick={() => addIt()} data-cy="add-product-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
