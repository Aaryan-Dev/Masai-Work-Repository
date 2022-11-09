import React from "react";

const BookCard = ({ bookData }) => {
  console.log(bookData);

  return (
    <div>
      <div>
        <img
          src="https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
          alt="book"
          width="200px"
        />
        <h1>{bookData.book_name}</h1>
        <div>{bookData.category}</div>
        <div>{bookData.release_year}</div>
      </div>
    </div>
  );
};

export default BookCard;
