import React from "react";
import Book from "./Book";

const BookList = ({ books }) => {
  return (
    <ol className="books-grid">
      {books.map((book) => (
        <li key={book.id}>
          <Book book={book} />
        </li>
      ))}
    </ol>
  );
};

BookList.propTypes = {};

export default BookList;
