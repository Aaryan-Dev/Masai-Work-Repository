import React from "react";

//Get the shoe card data from props.
const ShoeCard = ({ shoeId, img, name, cat }) => {
  return (
    <div data-cy={`shoe-card-wrapper-${shoeId}`}>
      <div>
        <img data-cy="shoe-card-image" src={img} alt={name} width="100px" />
      </div>
      <div>
        <div data-cy="shoe-name">{name}</div>
        <div data-cy="shoe-category">{cat}</div>
      </div>
    </div>
  );
};

export default ShoeCard;
