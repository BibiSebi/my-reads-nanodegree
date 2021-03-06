import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import * as BooksApi from "./api/BooksAPI";
import "./App.css";
import SearchPage from "./pages/SearchPage";
import ShelvesPage from "./pages/ShelvesPage";

function App() {
  const [state, setState] = useState({});

  useEffect(() => {
    getBooksInShelves();
  }, []);

  const getBooksInShelves = async () => {
    const booksInShelves = await BooksApi.getAll();
    const distinctShelves = getDistinctShelves(booksInShelves);
    setState({ books: booksInShelves, shelves: distinctShelves });
  };

  const changeShelf = async (book, shelf) => {
    await BooksApi.update(book, shelf);
    getBooksInShelves();
  };

  const getDistinctShelves = (booksInShelves) => {
    return booksInShelves.reduce((acc, current) => {
      if (acc?.includes(current.shelf)) {
        return acc;
      }
      return [...acc, current.shelf];
    }, []);
  };

  return (
    <div className="app">
      <Routes>
        <Route
          path="/search"
          element={
            <SearchPage
              onChangeShelf={changeShelf}
              booksWithShelves={state.books}
            />
          }
        />

        <Route
          path="/"
          element={
            <ShelvesPage
              books={state.books}
              shelves={state.shelves}
              onChangeShelf={changeShelf}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
