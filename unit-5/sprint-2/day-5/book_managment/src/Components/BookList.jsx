import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../Redux/app/action";
import BookCard from "./BookCard";
import { useLocation, useSearchParams } from "react-router-dom";

const BookList = () => {
  const books = useSelector((state) => state.AppReducer.books);

  const dispatch = useDispatch();

  const loaction = useLocation();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const sortBy = searchParams.get("sortBy");

    let getBookParams = {
      params: {
        category: searchParams.getAll("category"),
        _sort: sortBy && "release_year",
        _order: sortBy,
      },
    };

    dispatch(getBooks(getBookParams));
  }, [loaction.search]);

  return (
    <div>
      {books.map((singleBook) => {
        return <BookCard key={singleBook.id} bookData={singleBook} />;
      })}
    </div>
  );
};

export default BookList;
