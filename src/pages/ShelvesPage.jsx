import React from "react";
import { Link } from "react-router-dom";
import BookList from "../components/BookList";
export const ShelvesPage = ({ shelves, books, onChangeShelf }) => {
  const getDistinctBooks = (shelf, allBooks) => {
    return allBooks.filter((book) => book.shelf === shelf);
  };

  const getShelfTitle = (shelf) => {
    switch (shelf) {
      case "currentlyReading":
        return "Currently Reading";
      case "wantToRead":
        return "Want To Read";
      case "read":
        return "Read";
      default:
        return "";
    }
  };
  return books ? (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {shelves.map((shelf) => (
            <div key={shelf} className="bookshelf">
              <h2 className="bookshelf-title">{getShelfTitle(shelf)}</h2>
              <div className="bookshelf-books">
                <BookList
                  books={getDistinctBooks(shelf, books)}
                  onChangeShelf={onChangeShelf}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link to="/search"> Add a book</Link>
      </div>
    </div>
  ) : (
    ""
  );
};

export default ShelvesPage;
