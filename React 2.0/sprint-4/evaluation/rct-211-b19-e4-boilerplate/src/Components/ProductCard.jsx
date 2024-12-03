import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deletData, getData } from "../Redux/action";
const ProductCard = ({ item }) => {
  const dispatch = useDispatch();

  const deletIt = (id) => {
    // console.log(id);
    dispatch(deletData(id)).then(() => {
      dispatch(getData());
    });
  };

  return (
    <div data-cy={`product-card-${item.id}`}>
      <div data-cy="product-card-name">{item.title}</div>
      <div data-cy="product-card-category">{item.category}</div>
      <div>
        <img
          width="200px"
          data-cy="product-card-image"
          src={`${item.image}`}
          alt="Product"
        />
      </div>
      <div data-cy="product-card-price">€ {item.price}</div>
      <div>
        {/* Add a onClick handler for delete functionality */}
        <button onClick={() => deletIt(item.id)} data-cy="delete-button">
          Delete Product
        </button>
        {/* Link the Edit button to '/edit/:id' route, so that the user is navigate to the Edit page on button click */}

        <Link to={`/edit/${item.id}`}>
          <button data-cy="edit-button">Edit Product</button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
