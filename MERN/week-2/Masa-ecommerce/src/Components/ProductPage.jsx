import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../Redux/app/action";
import BookCard from "./ProductCard";
import { useLocation, useSearchParams } from "react-router-dom";
import { useState } from "react";

import "../App.css";
import FilterComp from "./FilterComp";

const ProductPage = () => {
  const [page, setPage] = useState(1);

  const products = useSelector((state) => state.products);

  const dispatch = useDispatch();
  const loaction = useLocation();
  const [searchParams] = useSearchParams();

  const url = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products?page=${page}&limit=12`;

  useEffect(() => {
    const sortBy = searchParams.get("sortBy");

    let getBookParams = {
      params: {
        category: searchParams.getAll("category"),
        sort: sortBy && "price",
        orderBy: sortBy,
      },
    };

    console.log(getBookParams);

    dispatch(getBooks(url, getBookParams));
  }, [loaction.search, page]);

  return (
    <div>
      <FilterComp />
      Page -
      <button disabled={page === 1} onClick={() => setPage(page - 1)}>
        {page}
      </button>
      <button disabled={page === 4} onClick={() => setPage(page + 1)}>
        {page + 1}
      </button>
      <div id="grid">
        {products.data?.map((singleBook) => {
          return <BookCard key={singleBook.id} Data={singleBook} />;
        })}
      </div>
    </div>
  );
};

export { ProductPage };
