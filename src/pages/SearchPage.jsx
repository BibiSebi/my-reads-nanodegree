import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../api/BooksAPI";
import BookList from "../components/BookList";

export const SearchPage = ({ onChangeShelf, booksWithShelves }) => {
  const [searchedBooks, setSearchedBooks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const onChangeInput = (value) => {
    setInputValue(value);
    BooksAPI.search(value).then((books) => {
      if (books.error) {
        setSearchedBooks([]);
        return;
      }

      const filteredBooks = books.filter((book) => book.imageLinks);
      const extendedBooks = mapBookShelf(filteredBooks, booksWithShelves);
      setSearchedBooks(extendedBooks);
    });
  };

  const mapBookShelf = (books, booksInShelves) => {
    return books.map((book) => {
      const bookWithShelf = booksInShelves.find(
        (bookInShelf) => bookInShelf.id === book.id
      );
      if (bookWithShelf) {
        return { ...book, shelf: bookWithShelf.shelf };
      }
      return book;
    });
  };
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <input
          type="text"
          placeholder="Search by title or author"
          value={inputValue}
          onChange={(event) => onChangeInput(event.target.value)}
        />
      </div>
      <div className="search-books-input-wrapper">
        {searchedBooks.length > 0 && (
          <BookList books={searchedBooks} onChangeShelf={onChangeShelf} />
        )}
      </div>
      <div className="search-books-results">
        <ol className="books-grid" />
      </div>
    </div>
  );
};

export default SearchPage;
