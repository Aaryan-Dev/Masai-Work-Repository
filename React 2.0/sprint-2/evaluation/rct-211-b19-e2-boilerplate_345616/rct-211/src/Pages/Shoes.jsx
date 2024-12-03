import React from "react";
import Filter from "../Components/Filter";

import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { getShoes } from "../Redux/AppReducer/action";
import ShoeCard from "../Components/ShoeCard";
import { Link } from "react-router-dom";

const Shoes = () => {
  useEffect(() => {
    dispatch(getShoes());
  }, []);

  const shoes = useSelector((data) => data.AppReducer.shoes);

  const dispatch = useDispatch();

  console.log(shoes);

  return (
    <div>
      <Filter />
      <div>
        {/* Map through the shoes list here using ShoeCard Component */}
        {shoes.map((el) => (
          <Link to={`/shoes/${el.id}`}>
            <ShoeCard
              shoeId={el.id}
              img={el.image}
              name={el.name}
              cat={el.category}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Shoes;
