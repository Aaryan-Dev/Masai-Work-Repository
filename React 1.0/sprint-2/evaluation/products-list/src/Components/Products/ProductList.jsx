import React from "react";
import ProductItem from "./ProductItem";

// create Product component which contains the list of ProductItem component
const ProductList = (props) => {
  const { thedata} = props;
  console.log(thedata);
  // console.log(pageno);

  let now = thedata.map((el)=>(<ProductItem title={el.title} price={el.price} cat={el.category} img = {el.image} />))

  return (
    <div data-testid="products-container">
      {now}
    </div>
  );
};

    


// export
export default ProductList;
