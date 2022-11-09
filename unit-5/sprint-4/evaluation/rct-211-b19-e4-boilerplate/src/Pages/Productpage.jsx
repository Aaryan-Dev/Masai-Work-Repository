import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../Components/ProductCard";
import { getData } from "../Redux/action";
// import { } from "../Redux/reducer";

const Productpage = () => {
  const dispatch = useDispatch();

  const datas = useSelector((data) => data.products);

  useEffect(() => {
    dispatch(getData());
  }, []);

  console.log(datas);

  return (
    <div style={{ width: "100%" }}>
      <div>
        {
          /* 
        1. Map through the product list items, and render them inside the "ProductCard.jsx", by passing the data through props
        2.  Use the inbuilt sort method before mapping through the data to show them in "asc" or "desc" order, based on URL Search Params 
        */
          datas.length > 0 &&
            datas.map((el) => <ProductCard key={el.id} item={el} />)
        }
      </div>
    </div>
  );
};

export default Productpage;
