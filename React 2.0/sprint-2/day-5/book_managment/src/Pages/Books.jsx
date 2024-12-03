import React from "react";
import BookList from "../Components/BookList";
import FilterComp from "../Components/FilterComp";

const Books = () => {
  return (
    <div>
      <FilterComp />
      <BookList />
    </div>
  );
};

export default Books;
