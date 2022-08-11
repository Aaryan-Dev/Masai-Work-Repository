import React from "react";

const ProductItem = (props) => {

  const { title, price, cat, img} = props

  return (
    <div
      data-testid="product-item"
      style={{
        display: "flex",
        gap: "1rem",
        justifyContent: "space-between",
        alignItems: "center",
        border: "1px solid #ccc",
        padding: "1rem",
        marginBottom: "1rem",
        flexDirection: "column",
      }}
    >
      <img src = {img} alt="cloth" data-testid="product-image" height="100px" />
      <b data-testid="product-title">{title}</b>
      <span data-testid="product-price">{price}</span>
      <div style={{ display: "flex" }}>
        <b data-testid="product-category">{cat}</b>
      </div>
    </div>
  );
};
export default ProductItem;
