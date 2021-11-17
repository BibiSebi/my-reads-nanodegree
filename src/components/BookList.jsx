import React from "react";
import Book from "./Book";

const BookList = ({ books, onChangeShelf }) => {
  return (
    <ol className="books-grid">
      {books.map((book) => (
        <li key={book.id}>
          <Book book={book} onChangeShelf={onChangeShelf} />
        </li>
      ))}
    </ol>
  );
};

BookList.propTypes = {};

export default BookList;
