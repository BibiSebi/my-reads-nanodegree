import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "../api/BooksAPI";
import BookList from "../components/BookList";

export const SearchPage = () => {
  const [searchedBooks, setSearchedBooks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const onChangeInput = (value) => {
    setInputValue(value);
    BooksAPI.search(value).then((books) => {
      if (books.error) {
        setSearchedBooks([]);
        return;
      }
      setSearchedBooks(books);
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
        {searchedBooks.length > 0 && <BookList books={searchedBooks} />}

        {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
      </div>
      <div className="search-books-results">
        <ol className="books-grid" />
      </div>
    </div>
  );
};

export default SearchPage;
